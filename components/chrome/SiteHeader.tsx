// Skip link, navigation, mobile sheet and the chapter wipe overlay.
// Generated from the original static site, then maintained by hand.
/* eslint-disable */
export default function SiteHeader() {
  return (
    <>
      {' '}
      <a className="sr" href="#main">
        Skip to content
      </a>{' '}
      <header className="nav pre" id="nav">
        {' '}
        <div className="wrap">
          {' '}
          <a className="brand" href="#home" aria-label="Nayeeb Rahman, home">
            {' '}
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <circle
                className="sig-ring"
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="#FA7402"
                strokeWidth="1.5"
                strokeDasharray="2.5 3.2"
              />
              <path
                d="M15 33V15l18 18V15"
                fill="none"
                stroke="#F2EEE8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle className="sig-spark" cx="37.5" cy="10.5" r="2.6" fill="#FA7402" />
            </svg>{' '}
            <b>Nayeeb</b>
            <span lang="ja">ナイエーブ</span>{' '}
          </a>{' '}
          <ul className="nav-links" id="navLinks">
            <li className="nav-ind" id="navInd" aria-hidden="true" />{' '}
            <li>
              <a href="#work">Work</a>
            </li>{' '}
            <li className="has-dd">
              <a href="#work" data-nav="cases" aria-haspopup="true" aria-expanded="false" id="ddBtn">
                Case studies{' '}
                <svg className="ico dd-caret">
                  <use href="#i-caret-down" />
                </svg>
              </a>
              <div className="dd" id="navCases" role="menu" aria-label="Case studies" />
            </li>{' '}
            <li>
              <a href="#hire">Hire me</a>
            </li>{' '}
            <li>
              <a href="#consulting">Consulting</a>
            </li>{' '}
            <li>
              <a href="#partner">Partner</a>
            </li>{' '}
            <li>
              <a href="#about">About</a>
            </li>{' '}
          </ul>{' '}
          <span className="nav-cta" id="navCta">
            <span className="corner tl" />
            <span className="corner br" />
            <a className="btn btn-primary" href="#contact">
              Let's talk{' '}
              <svg className="ico">
                <use href="#i-arrow-right" />
              </svg>
            </a>
          </span>{' '}
          <button className="menu-btn" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="sheet">
            <span className="burger" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>{' '}
        </div>{' '}
      </header>{' '}
      <div className="sheet" id="sheet" data-lenis-prevent="" role="dialog" aria-modal="true" aria-label="Menu">
        {' '}
        <div className="sheet-bg" aria-hidden="true">
          <img src="img/p1.webp" alt="" />
        </div>{' '}
        <div className="sheet-top">
          <span className="mono" style={{ color: 'var(--dim)' }}>
            Menu
          </span>
        </div>{' '}
        <ul>
          {' '}
          <li>
            <a href="#work">
              <span>Work</span>
              <small lang="ja">実績</small>
            </a>
          </li>{' '}
          <li className="sh-cases">
            <button
              type="button"
              className="sh-cases-btn"
              id="shCasesBtn"
              aria-expanded="false"
              aria-controls="sheetCases"
            >
              <span>Case studies</span>
              <small lang="ja">事例</small>
            </button>
            <div className="sh-cases-list" id="sheetCases" />
          </li>{' '}
          <li>
            <a href="#hire">
              <span>Hire me</span>
              <small lang="ja">採用</small>
            </a>
          </li>{' '}
          <li>
            <a href="#consulting">
              <span>Consulting</span>
              <small lang="ja">相談</small>
            </a>
          </li>{' '}
          <li>
            <a href="#partner">
              <span>Partner</span>
              <small lang="ja">協業</small>
            </a>
          </li>{' '}
          <li>
            <a href="#about">
              <span>About</span>
              <small lang="ja">物語</small>
            </a>
          </li>{' '}
          <li>
            <a href="#contact">
              <span>Contact</span>
              <small lang="ja">連絡</small>
            </a>
          </li>{' '}
        </ul>{' '}
      </div>{' '}
      <div className="wipe" id="wipe" aria-hidden="true">
        <div className="wipe-panel" />
        <div className="wipe-label">
          <svg className="wipe-sig" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2.5 3.2"
            />
            <path
              d="M15 33V15l18 18V15"
              fill="none"
              stroke="#F2EEE8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="37.5" cy="10.5" r="2.6" fill="#F2EEE8" />
          </svg>
          <span className="k" lang="ja" />
          <span className="n" />
        </div>
      </div>{' '}
      <div className="progress" id="progress" aria-hidden="true">
        <i />
      </div>{' '}
      <div className="cur" id="cur" aria-hidden="true">
        <i className="cur-ring" />
        <i className="cur-dot" />
      </div>{' '}
      <div className="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Document preview" hidden>
        {' '}
        <div className="lb-bar">
          <span className="mono" id="lbTitle" />
          <div className="lb-ctl">
            <button type="button" id="lbPrev" aria-label="Previous document">
              <svg className="ico" style={{ transform: 'scaleX(-1)' }}>
                <use href="#i-arrow-right" />
              </svg>
            </button>
            <button type="button" id="lbNext" aria-label="Next document">
              <svg className="ico">
                <use href="#i-arrow-right" />
              </svg>
            </button>
            <button type="button" id="lbOut" aria-label="Zoom out">
              <svg className="ico">
                <use href="#i-minus" />
              </svg>
            </button>
            <span className="mono" id="lbZ">
              100%
            </span>
            <button type="button" id="lbIn" aria-label="Zoom in">
              <svg className="ico">
                <use href="#i-plus" />
              </svg>
            </button>
            <button type="button" id="lbX" aria-label="Close preview">
              <svg className="ico">
                <use href="#i-x" />
              </svg>
            </button>
          </div>
        </div>{' '}
        <div className="lb-view" id="lbView">
          <div className="lb-doc" id="lbDoc" />
        </div>{' '}
      </div>{' '}
    </>
  );
}
