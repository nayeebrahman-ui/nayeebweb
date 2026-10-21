// Page section "work" (shown by the hash router in lib/runtime).
// Generated from the original static site, then maintained by hand.
/* eslint-disable */
export default function WorkPage() {
  return (
    <>
      <section
        className="page"
        data-page="work"
        data-k="実績"
        data-name="Work"
        data-title="Work - Nayeeb Rahman"
        hidden
      >
        {' '}
        <div className="page-hero wk">
          {' '}
          <div className="ab-bg" aria-hidden="true">
            <img className="ab-poster" src="img/wk-first.webp" alt="" />
            <video className="vb-v" muted playsInline preload="none" />
            <canvas className="vb-cv" />
            <i className="ab-scrim" />
          </div>{' '}
          <div className="work-bg" aria-hidden="true">
            <canvas id="workCanvas" />
            <div className="work-bg-shade" />
          </div>{' '}
          <div className="pa pa-w" data-live="prism">
            <img src="img/u-work.webp" data-lv="" alt="" style={{ objectPosition: '70% 30%' }} />
          </div>{' '}
          <span className="watermark" lang="ja" aria-hidden="true">
            実績
          </span>{' '}
          <div className="wrap">
            {' '}
            <h1 className="d-l">
              <span className="rv">
                <span>
                  The <span className="accent">work</span>
                </span>
              </span>
            </h1>{' '}
            <p className="lede" style={{ marginTop: '22px' }}>
              Case studies across product, growth, transformation and my own ventures.
            </p>{' '}
            <div className="filters" role="group" aria-label="Filter case studies">
              {' '}
              <span className="filter-ind" id="filterInd" aria-hidden="true" />{' '}
              <button className="filter" data-f="all" aria-pressed="true">
                All
              </button>{' '}
              <button className="filter" data-f="product" aria-pressed="false">
                Product
              </button>{' '}
              <button className="filter" data-f="growth" aria-pressed="false">
                Growth
              </button>{' '}
              <button className="filter" data-f="transformation" aria-pressed="false">
                Transformation
              </button>{' '}
              <button className="filter" data-f="ventures" aria-pressed="false">
                Ventures
              </button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <section className="wrap" style={{ paddingBottom: '120px' }}>
          {' '}
          <div className="grid-work" id="workGrid" />{' '}
          <div className="cta-band work-cta" id="workCta" style={{ marginTop: '96px' }}>
            {' '}
            <i className="cta-horizon" aria-hidden="true" /> <h2 className="h2">Want results like these?</h2>{' '}
            <div className="links">
              {' '}
              <a className="wl" href="#hire">
                <span className="wl-t">
                  Hire me full-time
                  <i className="brush" />
                </span>
                <span className="wl-a">
                  <svg className="ico">
                    <use href="#i-arrow-right" />
                  </svg>
                  <i className="spark" />
                </span>
              </a>{' '}
              <a className="wl" href="#consulting">
                <span className="wl-t">
                  Bring me in as a consultant
                  <i className="brush" />
                </span>
                <span className="wl-a">
                  <svg className="ico">
                    <use href="#i-arrow-right" />
                  </svg>
                  <i className="spark" />
                </span>
              </a>{' '}
              <a className="wl" href="#partner">
                <span className="wl-t">
                  Add me to your project team
                  <i className="brush" />
                </span>
                <span className="wl-a">
                  <svg className="ico">
                    <use href="#i-arrow-right" />
                  </svg>
                  <i className="spark" />
                </span>
              </a>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
      </section>
    </>
  );
}
