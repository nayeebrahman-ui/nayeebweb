// Page section "lost" (shown by the hash router in lib/runtime).
// Generated from the original static site, then maintained by hand.
/* eslint-disable */
export default function LostPage() {
  return (
    <>
      <section
        className="page"
        data-page="lost"
        data-k="迷子"
        data-name="Lost"
        data-title="Lost - Nayeeb Rahman"
        hidden
      >
        {' '}
        <div className="lost" id="lost">
          {' '}
          <span className="lost-k" lang="ja" aria-hidden="true">
            迷子
          </span>{' '}
          <div className="lost-av lvs" data-live="motes">
            <img src="img/u-lost.webp" data-lv="" alt="" loading="lazy" style={{ objectPosition: '66% 30%' }} />
          </div>{' '}
          <canvas className="mist mist-b" aria-hidden="true" />
          <canvas className="mist mist-f" aria-hidden="true" />{' '}
          <div className="wrap">
            <span className="kanji-tag" lang="ja" style={{ fontSize: '3rem' }}>
              迷子
            </span>
            <h1 className="d-l lost-h">Lost in the mist.</h1>
            <p className="lede">This page doesn't exist. Pick up the story from one of these.</p>{' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a className="btn btn-primary beacon" href="#home">
                Back to the start
              </a>
              <a className="btn btn-ghost beacon" href="#work">
                See the work
              </a>
            </div>
          </div>{' '}
        </div>{' '}
      </section>
    </>
  );
}
