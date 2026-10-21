// One-time migration helper: converts the original static-site markup into
// React (TSX) components so the Next.js app renders exactly the same DOM.
// Usage: node scripts/convert-markup.mjs <body.html> <sprite.html> <outDir>
// After migration the TSX files in components/ are the source of truth.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parseDocument } from 'htmlparser2';

const [bodyPath, spritePath, outDir] = process.argv.slice(2);
if (!bodyPath || !spritePath || !outDir) {
  console.error('usage: convert-markup.mjs <body.html> <sprite.html> <outDir>');
  process.exit(1);
}

const html = readFileSync(bodyPath, 'utf8').replace('{{SPRITE}}', readFileSync(spritePath, 'utf8'));
const doc = parseDocument(html, {
  lowerCaseTags: false,
  lowerCaseAttributeNames: false,
  recognizeSelfClosing: true,
  decodeEntities: true,
});

const ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly',
  maxlength: 'maxLength', autocomplete: 'autoComplete', crossorigin: 'crossOrigin',
  srcset: 'srcSet', playsinline: 'playsInline', autoplay: 'autoPlay', datetime: 'dateTime',
  inputmode: 'inputMode', spellcheck: 'spellCheck', contenteditable: 'contentEditable',
  fetchpriority: 'fetchPriority', enterkeyhint: 'enterKeyHint', novalidate: 'noValidate',
  frameborder: 'frameBorder', allowfullscreen: 'allowFullScreen', colspan: 'colSpan',
  rowspan: 'rowSpan', 'xlink:href': 'xlinkHref', 'xml:lang': 'xmlLang', 'xmlns:xlink': 'xmlnsXlink',
  'accept-charset': 'acceptCharset', 'http-equiv': 'httpEquiv', viewbox: 'viewBox',
};
const BOOL = new Set(['hidden', 'muted', 'loop', 'controls', 'playsInline', 'autoPlay', 'noValidate',
  'disabled', 'checked', 'readOnly', 'required', 'open', 'allowFullScreen', 'inert', 'defer', 'async']);
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const NO_WS = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr', 'colgroup', 'select']);

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const attrName = (n) => {
  if (ATTR[n]) return ATTR[n];
  if (n.startsWith('data-') || n.startsWith('aria-')) return n;
  if (n.includes('-')) return camel(n);
  return n;
};
const lit = (v) => (/[&"\\{}\n<>]/.test(v) ? `{${JSON.stringify(v)}}` : `"${v}"`);
const styleObj = (css) => {
  const out = [];
  for (const decl of css.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith('--') ? prop : camel(prop.replace(/^-ms-/, 'ms-').replace(/^-(webkit|moz)-/, (_, p) => p[0].toUpperCase() + p.slice(1) + '-'));
    out.push(`${JSON.stringify(key)}: ${JSON.stringify(val)}`);
  }
  return `{{ ${out.join(', ')} }}`;
};

function attrs(el) {
  return Object.entries(el.attribs || {}).map(([k, v]) => {
    const n = attrName(k);
    if (n === 'style') return `style=${styleObj(v)}`;
    if (BOOL.has(n) && (v === '' || v === k)) return n;
    if (n === 'tabIndex' && /^-?\d+$/.test(v)) return `tabIndex={${v}}`;
    return `${n}=${lit(v)}`;
  }).join(' ');
}

function node(n, parentTag, depth) {
  const pad = '  '.repeat(depth);
  if (n.type === 'comment' || n.type === 'directive') return '';
  if (n.type === 'text') {
    if (!n.data) return '';
    if (/^[ \t\n\r\f]*$/.test(n.data) && NO_WS.has(parentTag)) return '';
    if (parentTag === 'pre') return `{${JSON.stringify(n.data)}}`;
    // Collapse whitespace the way HTML rendering does, keeping a single space where one was.
    const t = n.data.replace(/[ \t\n\r\f]+/g, ' ');
    if (t === ' ') return `{' '}`;
    const lead = t.startsWith(' ') ? `{' '}` : '';
    const trail = t.endsWith(' ') ? `{' '}` : '';
    const core = t.replace(/^ | $/g, '');
    return lead + (/[{}<>&]/.test(core) ? `{${JSON.stringify(core)}}` : core) + trail;
  }
  if (n.type === 'tag' || n.type === 'script' || n.type === 'style') {
    const a = attrs(n);
    const open = `<${n.name}${a ? ' ' + a : ''}`;
    const kids = (n.children || []).map((c) => node(c, n.name, depth + 1)).filter(Boolean);
    if (VOID.has(n.name) || kids.length === 0) return `${open} />`;
    return `${open}>${kids.join('')}</${n.name}>`;
  }
  return '';
}

const pascal = (s) => s.replace(/(^|[-_ ])([a-z])/g, (_, __, c) => c.toUpperCase());
mkdirSync(join(outDir, 'pages'), { recursive: true });
mkdirSync(join(outDir, 'chrome'), { recursive: true });

const write = (file, name, nodes, note) => {
  const body = nodes.map((n) => node(n, 'body', 2)).filter(Boolean).join('');
  const src = `// ${note}\n// Generated from the original static site, then maintained by hand.\n/* eslint-disable */\nexport default function ${name}() {\n  return (\n    <>${body}</>\n  );\n}\n`;
  writeFileSync(file, src);
  return name;
};

const top = doc.children;
const mainIdx = top.findIndex((n) => n.type === 'tag' && n.name === 'main');
const before = top.slice(0, mainIdx);
const after = top.slice(mainIdx + 1);
const main = top[mainIdx];

const hasDef = (n) => (n.children || []).some((c) => c.type === 'tag' && (c.name === 'symbol' || c.name === 'filter' || (c.name === 'defs' && hasDef(c))));
const isSprite = (n) => n.type === 'tag' && n.name === 'svg' && hasDef(n);
write(join(outDir, 'chrome', 'SvgDefs.tsx'), 'SvgDefs', before.filter(isSprite), 'Shared SVG filters and the icon sprite (referenced via <use href="#i-...">).');
write(join(outDir, 'chrome', 'SiteHeader.tsx'), 'SiteHeader', before.filter((n) => !isSprite(n)), 'Skip link, navigation, mobile sheet and the chapter wipe overlay.');
write(join(outDir, 'chrome', 'SiteFooter.tsx'), 'SiteFooter', after, 'Footer and anything rendered after <main>.');

const pages = [];
for (const s of main.children) {
  if (s.type !== 'tag') continue;
  const key = s.attribs['data-page'];
  if (!key) throw new Error('unexpected element in <main>: ' + s.name);
  const name = pascal(key) + 'Page';
  write(join(outDir, 'pages', name + '.tsx'), name, [s], `Page section "${key}" (shown by the hash router in lib/runtime).`);
  pages.push([key, name]);
}
writeFileSync(join(outDir, 'pages', 'index.ts'), pages.map(([, n]) => `export { default as ${n} } from './${n}';`).join('\n') + '\n');
console.log('pages:', pages.map((p) => p[0]).join(', '));
console.log('before main:', before.filter((n) => n.type === 'tag').map((n) => n.name + (n.attribs.id ? '#' + n.attribs.id : '')).join(', '));
console.log('after main:', after.filter((n) => n.type === 'tag').map((n) => n.name + (n.attribs.id ? '#' + n.attribs.id : '')).join(', '));
