// Page section "contact" (shown by the hash router in lib/runtime).
// Generated from the original static site, then maintained by hand.
/* eslint-disable */
export default function ContactPage() {
  return (
    <>
      <section
        className="page"
        data-page="contact"
        data-k="連絡"
        data-name="Let's talk"
        data-title="Contact - Nayeeb Rahman"
        hidden
      >
        {' '}
        <div className="page-hero has-pa" style={{ paddingBottom: '40px' }}>
          {' '}
          <div className="pa" data-live="embers">
            <img src="img/u-contact.webp" data-lv="" alt="" style={{ objectPosition: '76% 20%' }} />
          </div>{' '}
          <span className="watermark k-wm" lang="ja" aria-hidden="true">
            連絡
          </span>{' '}
          <div className="wrap">
            <h1 className="d-l k-h" aria-label="Send a signal.">
              <span className="wp k1" aria-hidden="true">
                Send a
              </span>{' '}
              <span className="wp k2" aria-hidden="true">
                <span>signal.</span>
              </span>
            </h1>{' '}
            <p className="lede k-sub" style={{ marginTop: '20px' }}>
              Pick what you're after and I'll ask only what matters for it.
            </p>
          </div>{' '}
        </div>{' '}
        <section className="wrap" style={{ paddingBottom: '140px' }}>
          {' '}
          <div className="contact-grid">
            {' '}
            <div className="cbox" id="cbox">
              <div className="cform" id="cform">
                {' '}
                <div className="intents" role="radiogroup" aria-label="What are you after?">
                  {' '}
                  <button className="intent" role="radio" aria-checked="true" data-i="hire">
                    <svg className="ico">
                      <use href="#i-briefcase" />
                    </svg>
                    Full-time role
                  </button>{' '}
                  <button className="intent" role="radio" aria-checked="false" data-i="consulting">
                    <svg className="ico">
                      <use href="#i-strategy" />
                    </svg>
                    Consulting
                  </button>{' '}
                  <button className="intent" role="radio" aria-checked="false" data-i="partner">
                    <svg className="ico">
                      <use href="#i-handshake" />
                    </svg>
                    Project partnership
                  </button>{' '}
                  <button className="intent" role="radio" aria-checked="false" data-i="other">
                    <svg className="ico">
                      <use href="#i-envelope-simple" />
                    </svg>
                    Something else
                  </button>{' '}
                </div>{' '}
                <form id="form" noValidate>
                  {' '}
                  <div className="fields" id="fields" />{' '}
                  {/* Spam trap: hidden from people, bots tend to fill it. Checked in app/api/contact. */}
                  <input
                    className="hp"
                    type="text"
                    name="company_site"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div
                    style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}
                  >
                    {' '}
                    <button className="btn btn-primary" type="submit">
                      Send message{' '}
                      <svg className="ico">
                        <use href="#i-arrow-right" />
                      </svg>
                    </button>{' '}
                  </div>{' '}
                </form>
              </div>{' '}
              <div className="sent" id="sent" hidden>
                {' '}
                <div className="sent-art" data-live="prism">
                  <img src="img/u-sent.webp" data-lv="" alt="" loading="lazy" style={{ objectPosition: '52% 45%' }} />
                </div>{' '}
                <svg className="seal" viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="32" r="28" />
                  <path d="M20 33l8 8 16-18" />
                </svg>{' '}
                <h2 className="h3">Message ready</h2>{' '}
                <p className="body-copy">
                  This page can't send email by itself yet. Copy the message below and send it to
                  nayeebrahman@gmail.com, or open it straight in your email app.
                </p>{' '}
                <pre id="sentText" />{' '}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <button className="btn btn-primary" type="button" id="copyMsg">
                    <span className="ci" aria-hidden="true">
                      <svg className="ico c-copy">
                        <use href="#i-copy" />
                      </svg>
                      <svg className="ico c-ok">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span className="c-lbl">Copy message</span>
                  </button>
                  <a className="btn btn-ghost" id="mailMsg" href="mailto:nayeebrahman@gmail.com">
                    <svg className="ico">
                      <use href="#i-envelope-simple" />
                    </svg>
                    Open in email
                  </a>
                  <button className="btn btn-ghost" type="button" id="editMsg">
                    Edit
                  </button>
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <aside className="direct" aria-label="Direct contact">
              {' '}
              <div className="item">
                <svg className="ico">
                  <use href="#i-envelope-simple" />
                </svg>
                <div>
                  <b>Email</b>
                  <span>
                    <a className="dl" href="mailto:nayeebrahman@gmail.com">
                      nayeebrahman@gmail.com
                    </a>
                  </span>
                </div>
                <button
                  className="copy"
                  type="button"
                  data-copy="nayeebrahman@gmail.com"
                  aria-label="Copy email address"
                >
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-phone" />
                </svg>
                <div>
                  <b>Phone</b>
                  <span>
                    <a className="dl" href="tel:+8801624373686">
                      +880 1624 373686
                    </a>
                    <br />
                    <a className="dl" href="tel:+8801787680648">
                      +880 1787 680648
                    </a>
                  </span>
                </div>
                <button className="copy" type="button" data-copy="+8801624373686" aria-label="Copy phone number">
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-whatsapp-logo" />
                </svg>
                <div>
                  <b>WhatsApp</b>
                  <span>
                    <a className="dl" href="https://wa.me/8801624373686" target="_blank" rel="noopener">
                      +880 1624 373686
                    </a>{' '}
                    · @Nayeeb.Rahman
                  </span>
                </div>
                <button className="copy" type="button" data-copy="+8801624373686" aria-label="Copy WhatsApp number">
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-linkedin-logo" />
                </svg>
                <div>
                  <b>LinkedIn</b>
                  <span>
                    <a
                      className="dl"
                      href="https://www.linkedin.com/in/md-nayeeb-rahman-b3a90a136/"
                      target="_blank"
                      rel="noopener"
                    >
                      in/md-nayeeb-rahman
                    </a>
                  </span>
                </div>
                <button
                  className="copy"
                  type="button"
                  data-copy="https://www.linkedin.com/in/md-nayeeb-rahman-b3a90a136/"
                  aria-label="Copy LinkedIn link"
                >
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-calendar-blank" />
                </svg>
                <div>
                  <b>Book a call</b>
                  <span>
                    <a
                      className="dl"
                      href={
                        'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Call+with+Nayeeb+Rahman&details=Intro+call+requested+from+Nayeeb+Rahman%27s+portfolio.+Pick+a+time+and+add+what+you+would+like+to+discuss.&add=nayeebrahman%40gmail.com'
                      }
                      target="_blank"
                      rel="noopener"
                    >
                      Send a Google Calendar invite
                    </a>
                  </span>
                </div>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-github-logo" />
                </svg>
                <div>
                  <b>GitHub</b>
                  <span>
                    <a className="dl" href="https://github.com/nayeebrahman-ui" target="_blank" rel="noopener">
                      github.com/nayeebrahman-ui
                    </a>
                  </span>
                </div>
                <button
                  className="copy"
                  type="button"
                  data-copy="https://github.com/nayeebrahman-ui"
                  aria-label="Copy GitHub link"
                >
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-instagram-logo" />
                </svg>
                <div>
                  <b>Instagram</b>
                  <span>
                    <a
                      className="dl"
                      href="https://www.instagram.com/nights_and_days_of_neptune/"
                      target="_blank"
                      rel="noopener"
                    >
                      @nights_and_days_of_neptune
                    </a>
                  </span>
                </div>
                <button
                  className="copy"
                  type="button"
                  data-copy="https://www.instagram.com/nights_and_days_of_neptune/"
                  aria-label="Copy Instagram link"
                >
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="item">
                <svg className="ico">
                  <use href="#i-facebook-logo" />
                </svg>
                <div>
                  <b>Facebook</b>
                  <span>
                    <a className="dl" href="https://www.facebook.com/audry.rahman.5/" target="_blank" rel="noopener">
                      facebook.com/audry.rahman.5
                    </a>
                  </span>
                </div>
                <button
                  className="copy"
                  type="button"
                  data-copy="https://www.facebook.com/audry.rahman.5/"
                  aria-label="Copy Facebook link"
                >
                  <span className="ci" aria-hidden="true">
                    <svg className="ico c-copy">
                      <use href="#i-copy" />
                    </svg>
                    <svg className="ico c-ok">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </button>
              </div>{' '}
              <p className="promise">
                <span className="badge">
                  <i />
                  Replies within 24 hours
                </span>{' '}
                Dhaka, UTC+6
              </p>{' '}
            </aside>{' '}
          </div>{' '}
        </section>{' '}
      </section>
    </>
  );
}
