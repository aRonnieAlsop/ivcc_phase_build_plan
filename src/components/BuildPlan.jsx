import "./BuildPlan.css";
import logo from "../assets/logo.svg";
import mountain from "../assets/indian-valley-mountain.png";

function BuildPlan() {
  return (
    <main className="build-plan">
      <div className="proposal-page">

<header className="proposal-header">
  <div className="proposal-title-row">

    <div className="title-card">
      <h1>
        Phased
        <br />
        Website
        <br />
        Build Plan
      </h1>
    </div>

    <div className="mountain-strip">
      <img
        src={mountain}
        alt="Indian Valley mountain landscape"
      />
    </div>

  </div>

  <div className="proposal-intro-wrap">
    <p className="proposal-intro">
      Build the Chamber's most-needed applications first so they can be
      tested, approved and put to use while the complete new website
      continues to take shape.
    </p>
  </div>
</header>

        {/* BUILD MENU */}
        <section className="build-menu">
          <div className="menu-heading">
            <div>
              <p className="section-label">Initial Build</p>
              <h2>The $4,000 Build Menu</h2>
            </div>

            <p className="menu-note">
              Estimated Development Time + Value
            </p>
          </div>

          <div className="menu-table">

            {/* 01 */}
            <article className="menu-item">
              <div className="menu-number">01</div>

              <div className="menu-content">
                <h3>Business Membership Directory + Admin</h3>
                <p>
                  Searchable member profiles for visitors, residents and
                  tourists, with simple Chamber tools to add, edit and remove
                  member listings and images.
                </p>
              </div>

              <div className="menu-time">
                <span>30–40</span>
                <small>hours</small>
              </div>

              <div className="menu-price">
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
                  A clear archive searchable by date and keywords, with simple
                  administration for adding and managing agenda records and
                  PDFs.
                </p>
              </div>

              <div className="menu-time">
                <span>12–18</span>
                <small>hours</small>
              </div>

              <div className="menu-price">
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

              <div className="menu-time">
                <span>14–20</span>
                <small>hours</small>
              </div>

              <div className="menu-price">
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
                  Searchable Member News and local features with an easy
                  article creator for business, tourism and Chamber stories.
                </p>
              </div>

              <div className="menu-time">
                <span>14–20</span>
                <small>hours</small>
              </div>

              <div className="menu-price">
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
                  Landing page, navigation, footer, Board presentation,
                  Bylaws, business resources, tourism information, overall
                  aesthetic and final React/Vite integration.
                </p>
              </div>

              <div className="menu-time">
                <span>20–30</span>
                <small>hours</small>
              </div>

              <div className="menu-price">
                <strong>$1,000–$1,500</strong>
                <small>estimated value</small>
              </div>
            </article>

          </div>
        </section>

        {/* TOTAL */}
        <section className="project-total">
          <div className="value-total">
            <p>Estimated Development</p>
            <strong>90–128 HOURS</strong>
            <span>$4,500–$6,400 estimated value</span>
          </div>

          <div className="chamber-price">
            <p>Chamber Project Price</p>
            <strong>$4,000 MAX</strong>
          </div>
        </section>

        <p className="cap-statement">
          The $4,000 project cap includes completion of all five phases shown
          above.
        </p>

        {/* FUTURE MENU */}
        <section className="future-menu">
          <div className="future-heading">
            <span>Future Expansion</span>
            <strong>Separate Approval</strong>
          </div>

          <p>
            Members Login + Resource Center
            <span>•</span>
            Member Job Board
            <span>•</span>
            Member-to-Member Deals
            <span>•</span>
            Community Calendar
            <span>•</span>
            Agenda Builder + PDF Generation
          </p>
        </section>

        {/* SMALL NOTES */}
        <section className="proposal-notes">
          <div className="proposal-note">
            <h4>Chamber-Owned</h4>
            <p>
              Applications, source code and project infrastructure are built
              for Chamber ownership and Chamber-controlled access.
              Authentication is limited to administrative functions that
              require it.
            </p>
          </div>

          <div className="proposal-note">
            <h4>Local Photography</h4>
            <p>
              Local and semi-local photography may be incorporated through
              separately arranged usage permissions and is separate from the
              $4,000 development cost.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="proposal-footer">
          <div className="designer">
            <img
              className="designer-logo"
              src={logo}
              alt="Arron Alsop"
            />

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