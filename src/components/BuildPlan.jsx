import "./BuildPlan.css";

function BuildPlan() {
  return (
    <main className="build-plan">
      <div className="proposal-page">

        {/* HEADER */}
        <header className="proposal-header">
          <p className="proposal-eyebrow">
            Indian Valley Chamber of Commerce
          </p>

          <h1>
            Phased Website
            <br />
            Build Plan
          </h1>

          <p className="proposal-intro">
            Build the Chamber's most-needed applications first so they can
            be tested, approved and put to use while the complete new website
            continues to take shape.
          </p>
        </header>

        {/* MENU */}
        <section className="build-menu">
          <div className="menu-heading">
            <div>
              <p className="section-label">Initial Build</p>
              <h2>The $4,000 Build Menu</h2>
            </div>

            <p className="menu-note">
              Estimated development time + value
            </p>
          </div>

          {/* 01 */}
          <article className="menu-item">
            <div className="menu-number">01</div>

            <div className="menu-content">
              <h3>Business Membership Directory + Admin</h3>
              <p>
                Searchable member profiles for visitors, residents and
                tourists, paired with simple Chamber tools to add, edit and
                remove member listings and images.
              </p>
            </div>

            <div className="menu-price">
              <span>30–40 hrs</span>
              <strong>$1,500–$2,000</strong>
              <small>estimated value</small>
            </div>
          </article>

          {/* 02 */}
          <article className="menu-item">
            <div className="menu-number">02</div>

            <div className="menu-content">
              <h3>Agenda + Public Records Archive</h3>
              <p>
                A clear agenda archive searchable by date and keywords, with
                simple administration for adding, editing and managing public
                agenda records and PDFs.
              </p>
            </div>

            <div className="menu-price">
              <span>12–18 hrs</span>
              <strong>$600–$900</strong>
              <small>estimated value</small>
            </div>
          </article>

          {/* 03 */}
          <article className="menu-item">
            <div className="menu-number">03</div>

            <div className="menu-content">
              <h3>Member Events + Admin</h3>
              <p>
                An elevated presentation of Chamber and member events with
                easy event management and an upcoming-events component for
                the future landing page.
              </p>
            </div>

            <div className="menu-price">
              <span>14–20 hrs</span>
              <strong>$700–$1,000</strong>
              <small>estimated value</small>
            </div>
          </article>

          {/* 04 */}
          <article className="menu-item">
            <div className="menu-number">04</div>

            <div className="menu-content">
              <h3>Member News + Article Creator</h3>
              <p>
                Searchable Member News and local features with an easy article
                creator for publishing stories, business features, tourism
                content and Chamber news.
              </p>
            </div>

            <div className="menu-price">
              <span>14–20 hrs</span>
              <strong>$700–$1,000</strong>
              <small>estimated value</small>
            </div>
          </article>

          {/* 05 */}
          <article className="menu-item">
            <div className="menu-number">05</div>

            <div className="menu-content">
              <h3>Website Assembly + Overall Design</h3>
              <p>
                Landing page, navigation, footer, Board presentation, Bylaws
                and business resources, tourism information, overall aesthetic,
                and integration into one cohesive React/Vite website.
              </p>
            </div>

            <div className="menu-price">
              <span>20–30 hrs</span>
              <strong>$1,000–$1,500</strong>
              <small>estimated value</small>
            </div>
          </article>
        </section>

        {/* PROJECT TOTAL */}
        <section className="project-total">
          <div className="value-total">
            <span>Estimated Development</span>
            <strong>90–128 hrs</strong>
            <span className="estimated-value">
              $4,500–$6,400 estimated value
            </span>
          </div>

          <div className="chamber-price">
            <span>Chamber Project Price</span>
            <strong>$4,000 MAX</strong>
          </div>
        </section>

        <p className="cap-statement">
          The $4,000 project cap includes completion of all five phases shown
          above.
        </p>

        {/* SMALL PRINT SECTIONS */}
        <section className="proposal-details">

          <div className="detail-block future">
            <h4>Future Expansion Menu</h4>
            <p>
              Members Login + Resource Center &nbsp;•&nbsp; Member Job Board
              &nbsp;•&nbsp; Member-to-Member Deals &nbsp;•&nbsp; Community
              Calendar &nbsp;•&nbsp; Agenda Builder + PDF Generation
            </p>
          </div>

          <div className="detail-columns">
            <div className="detail-block">
              <h4>Chamber-Owned Infrastructure</h4>
              <p>
                New applications, source code and project infrastructure are
                built for Chamber ownership and Chamber-controlled access.
                Authentication remains limited to administrative functions
                that require it.
              </p>
            </div>

            <div className="detail-block">
              <h4>Local Photography</h4>
              <p>
                Local and semi-local photography may be incorporated through
                separately arranged usage permissions. Photography is separate
                from the $4,000 development cost.
              </p>
            </div>
          </div>

        </section>

        {/* DESIGNER FOOTER */}
        <footer className="proposal-footer">
          <div className="designer">
            <div className="logo-wrap">
              <img
                src="/logo_A_A(1).svg"
                alt="Arron Alsop logo"
              />
            </div>

            <div className="designer-info">
              <strong>Arron Alsop</strong>
              <span>Web / UX-UI Design + Development</span>
            </div>
          </div>

          <div className="proposal-date">
            <span>Prepared for</span>
            <strong>Indian Valley Chamber of Commerce</strong>
            <span>August 2026</span>
          </div>
        </footer>

      </div>
    </main>
  );
}

export default BuildPlan;