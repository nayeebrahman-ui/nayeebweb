// Footer and anything rendered after <main>.
// Generated from the original static site, then maintained by hand.
/* eslint-disable */
export default function SiteFooter() {
  return (
    <>
      {' '}
      <footer id="foot">
        {' '}
        <div className="foot-fx" aria-hidden="true">
          <span className="foot-k" lang="ja">
            物語は続く
          </span>
          <svg className="foot-horizon" viewBox="0 0 1600 260" preserveAspectRatio="none">
            <path
              d="M0 260V178h40v-26h28v26h34v-60h22v60h30v-38h46v38h26v-88h18v-14h16v14h18v88h40v-48h52v48h30v-70h26v70h36v-34h44v34h24v-104h30v104h40v-56h36v56h28v-42h50v42h34v-78h22v78h38v-30h46v30h30v-64h24v64h44v-46h40v46h26v-96h20v96h36v-40h48v40h32v-58h28v58h50v-28h40v28h46V260Z"
              fill="#17110D"
            />
            <rect y="150" width="1600" height="110" fill="url(#fogG)" />
            <defs>
              <linearGradient id="fogG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#07080C" stopOpacity="0" />
                <stop offset="1" stopColor="#07080C" />
              </linearGradient>
            </defs>
          </svg>
          <canvas className="foot-embers" />
        </div>{' '}
        <div className="foot-scene" data-live="prism">
          <img src="img/u-foot.webp" data-lv="" alt="" loading="lazy" style={{ objectPosition: '50% 50%' }} />
        </div>{' '}
        <div className="wrap">
          {' '}
          <div style={{ display: 'grid', gap: '18px' }}>
            {' '}
            <a className="brand" href="#home">
              <svg viewBox="0 0 48 48" aria-hidden="true" style={{ width: '40px', height: '40px' }}>
                <circle
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
                <circle cx="37.5" cy="10.5" r="2.6" fill="#FA7402" />
              </svg>
              <b>Nayeeb Rahman</b>
            </a>{' '}
            <p className="body-copy" style={{ maxWidth: '36ch' }}>
              Product, business analysis and growth. Based in Dhaka, working with teams anywhere.
            </p>{' '}
          </div>{' '}
          <div>
            <h4>Pages</h4>
            <ul className="foot-nav">
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#work">Case studies</a>
              </li>
              <li>
                <a href="#hire">Hire me</a>
              </li>
              <li>
                <a href="#consulting">Consulting</a>
              </li>
              <li>
                <a href="#partner">Partner</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Let's talk</a>
              </li>
            </ul>
          </div>{' '}
          <div>
            <h4>Contact</h4>
            <ul className="foot-contact">
              {' '}
              <li>
                <a href="mailto:nayeebrahman@gmail.com">
                  <svg className="ico">
                    <use href="#i-envelope-simple" />
                  </svg>
                  nayeebrahman@gmail.com
                </a>
              </li>{' '}
              <li>
                <a href="tel:+8801624373686">
                  <svg className="ico">
                    <use href="#i-phone" />
                  </svg>
                  +880 1624 373686
                </a>
              </li>{' '}
              <li>
                <a href="tel:+8801787680648">
                  <svg className="ico">
                    <use href="#i-phone" />
                  </svg>
                  +880 1787 680648
                </a>
              </li>{' '}
              <li>
                <a href="https://wa.me/8801624373686" target="_blank" rel="noopener">
                  <svg className="ico">
                    <use href="#i-whatsapp-logo" />
                  </svg>
                  WhatsApp @Nayeeb.Rahman
                </a>
              </li>{' '}
            </ul>
          </div>{' '}
          <div>
            <h4>Elsewhere</h4>
            <ul className="foot-social">
              {' '}
              <li>
                <a href="https://www.linkedin.com/in/md-nayeeb-rahman-b3a90a136/" target="_blank" rel="noopener">
                  <svg className="ico">
                    <use href="#i-linkedin-logo" />
                  </svg>
                  LinkedIn
                </a>
              </li>{' '}
              <li>
                <a href="https://github.com/nayeebrahman-ui" target="_blank" rel="noopener">
                  <svg className="ico">
                    <use href="#i-github-logo" />
                  </svg>
                  GitHub
                </a>
              </li>{' '}
              <li>
                <a href="https://www.instagram.com/nights_and_days_of_neptune/" target="_blank" rel="noopener">
                  <svg className="ico">
                    <use href="#i-instagram-logo" />
                  </svg>
                  Instagram
                </a>
              </li>{' '}
              <li>
                <a href="https://www.facebook.com/audry.rahman.5/" target="_blank" rel="noopener">
                  <svg className="ico">
                    <use href="#i-facebook-logo" />
                  </svg>
                  Facebook
                </a>
              </li>{' '}
            </ul>
          </div>{' '}
          <p className="foot-sign" lang="en">
            <span>Every story needs its next arc.</span>
          </p>{' '}
          <div className="foot-base">
            <span>© 2026 Nayeeb Rahman</span>
            <span className="jp" lang="ja">
              物語は続く
            </span>
            <span>Built in Dhaka</span>
          </div>{' '}
        </div>{' '}
      </footer>{' '}
    </>
  );
}
