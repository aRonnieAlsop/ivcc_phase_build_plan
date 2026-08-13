import { useState } from "react";
import "./InteractiveBuildPlan.css";

import logo from "../assets/logo.svg";
import mountain from "../assets/indian-valley-mountain.png";

function InteractiveBuildPlan() {
  const [openPhase, setOpenPhase] = useState(null);
  const [pricingOpen, setPricingOpen] = useState(false);

  const togglePhase = (phase) => {
    setOpenPhase(openPhase === phase ? null : phase);
  };

  return (
    <main className="build-plan interactive-build-plan">
      <div className="proposal-page">

        {/* HEADER */}
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
            <article
              className={`menu-item interactive-menu-item ${
                openPhase === 1 ? "is-open" : ""
              }`}
            >
              <button
                className="menu-trigger"
                type="button"
                onClick={() => togglePhase(1)}
                aria-expanded={openPhase === 1}
              >
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
              </button>

              {openPhase === 1 && (
                <div className="menu-expanded">
                  <div className="expanded-section">
                    <h4>Public Directory</h4>
                    <p>
                      A polished, searchable presentation of Chamber businesses
                      and organizations, with individual business cards and more
                      detailed member profiles. Visitors will be able to search
                      and filter by business type, making the directory useful
                      not only to members seeking greater exposure, but also to
                      residents and tourists looking for local services,
                      shopping, dining, lodging, organizations and other
                      resources.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Chamber Admin</h4>
                    <p>
                      A very simple administrative interface designed so that
                      even a non-technical Board member or PR contractor can
                      maintain the directory. Authorized Chamber users will be
                      able to add a new member, edit an existing member,
                      upload/change images, or remove an old member without
                      touching code.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Current Website Integration</h4>
                    <p>
                      Once approved and tested, the application will be made
                      usable through the existing Bliss Branding WordPress site
                      where practical, either by embedding the React
                      application/widget or linking/redirecting visitors to the
                      Chamber-owned application. This allows the directory to
                      begin serving members while the remaining applications
                      and full website are still being built.
                    </p>
                  </div>
                </div>
              )}
            </article>

            {/* 02 */}
            <article
              className={`menu-item interactive-menu-item ${
                openPhase === 2 ? "is-open" : ""
              }`}
            >
              <button
                className="menu-trigger"
                type="button"
                onClick={() => togglePhase(2)}
                aria-expanded={openPhase === 2}
              >
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
              </button>

              {openPhase === 2 && (
                <div className="menu-expanded">
                  <div className="expanded-section">
                    <h4>Public Agenda Archive</h4>
                    <p>
                      A clean public archive of Chamber agendas and public
                      records that visitors can browse by date and search by
                      keywords rather than digging through the current website.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Chamber Admin</h4>
                    <p>
                      A simple administrative interface for authorized Chamber
                      users to add, edit, upload, organize and manage agenda
                      records and PDFs without needing to work directly inside
                      website code.
                    </p>
                  </div>
                </div>
              )}
            </article>

            {/* 03 */}
            <article
              className={`menu-item interactive-menu-item ${
                openPhase === 3 ? "is-open" : ""
              }`}
            >
              <button
                className="menu-trigger"
                type="button"
                onClick={() => togglePhase(3)}
                aria-expanded={openPhase === 3}
              >
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
              </button>

              {openPhase === 3 && (
                <div className="menu-expanded">
                  <div className="expanded-section">
                    <h4>Member Events Presentation</h4>
                    <p>
                      A cleaner, more useful presentation of upcoming Chamber
                      and Chamber-member events, with the important information,
                      imagery and links visitors need while maintaining a
                      simple, chic and elevated presentation.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Chamber Admin</h4>
                    <p>
                      Authorized Chamber users will have a straightforward
                      interface designed for non-technical users to add new
                      events, edit existing information, manage event images and
                      details, and remove outdated events without touching code.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Upcoming Events — Landing Page Component</h4>
                    <p>
                      The eventual Chamber landing page will feature the three
                      nearest upcoming events with an easy way to continue
                      browsing additional events. This component can be
                      developed and tested while the full site is still being
                      assembled.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Current Website Access</h4>
                    <p>
                      After testing and approval, the Events application will be
                      tested for practical embedding, linking or other access
                      through or alongside the current Bliss Branding website so
                      it can begin serving the Chamber before the final website
                      is complete.
                    </p>
                  </div>
                </div>
              )}
            </article>

            {/* 04 */}
            <article
              className={`menu-item interactive-menu-item ${
                openPhase === 4 ? "is-open" : ""
              }`}
            >
              <button
                className="menu-trigger"
                type="button"
                onClick={() => togglePhase(4)}
                aria-expanded={openPhase === 4}
              >
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
              </button>

              {openPhase === 4 && (
                <div className="menu-expanded">
                  <div className="expanded-section">
                    <h4>Member News Presentation</h4>
                    <p>
                      A clear, intentional home for Chamber-member news, local
                      business and organization features, tourism stories and
                      other articles, separated from Events so visitors can
                      actually discover the content.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Search + Discovery</h4>
                    <p>
                      Articles will be organized so visitors can search and
                      browse past content rather than stumbling across
                      individual stories haphazardly.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Article Creator + Admin</h4>
                    <p>
                      A simple, non-technical editor allowing an authorized
                      Chamber user to create an article, add images, edit
                      existing stories, and publish or remove content without
                      touching code.
                    </p>
                  </div>
                </div>
              )}
            </article>

            {/* 05 */}
            <article
              className={`menu-item interactive-menu-item ${
                openPhase === 5 ? "is-open" : ""
              }`}
            >
              <button
                className="menu-trigger"
                type="button"
                onClick={() => togglePhase(5)}
                aria-expanded={openPhase === 5}
              >
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
              </button>

              {openPhase === 5 && (
                <div className="menu-expanded">
                  <div className="expanded-section">
                    <h4>Landing Page + Site Navigation</h4>
                    <p>
                      A new responsive landing page, navigation system and
                      footer designed to make the Chamber's most important
                      information and new applications immediately accessible.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Board of Directors</h4>
                    <p>
                      A polished Board presentation with a simple
                      administrative tool for authorized Chamber users to add,
                      edit or remove Board members and photographs.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Chamber Documents + Business Resources</h4>
                    <p>
                      Clear, organized access to Bylaws, existing business
                      resources, forms and other useful Chamber materials that
                      remain available but need a better home.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Tourism + Indian Valley Information</h4>
                    <p>
                      A stronger presentation of Indian Valley information that
                      helps the Chamber website serve visitors as well as
                      businesses and residents.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Overall Visual Design</h4>
                    <p>
                      A cohesive visual system tying the applications and
                      informational content together into a simple, elevated
                      Chamber website. Local and semi-local photography may be
                      incorporated through separately arranged usage
                      permissions and remains separate from the $4,000
                      development cost.
                    </p>
                  </div>

                  <div className="expanded-section">
                    <h4>Application Integration + Final React/Vite Build</h4>
                    <p>
                      Individual applications may first be accessible through
                      or alongside the current WordPress website. The final
                      phase brings those approved applications together more
                      cleanly inside one Chamber-owned React/Vite website.
                    </p>
                  </div>
                </div>
              )}
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

        {/* PRICING DETAILS DROPDOWN */}
        <section className="pricing-details">
          <button
            type="button"
            className="pricing-trigger"
            onClick={() => setPricingOpen(!pricingOpen)}
            aria-expanded={pricingOpen}
          >
            <span>Pricing + Development Details</span>
            <span className="pricing-symbol">
              {pricingOpen ? "−" : "+"}
            </span>
          </button>

          {pricingOpen && (
            <div className="pricing-expanded">
              <p>
                Estimated development hours and values are provided to
                illustrate the anticipated scale of each phase. They are
                planning estimates rather than calendar deadlines.
              </p>

              <p>
                The Chamber's cost for completion of the five defined initial
                phases will not exceed $4,000, even if the actual development
                time required to properly complete the approved scope exceeds
                the estimates shown.
              </p>

              <p>
                Applications will be developed, tested and made available
                progressively where practical so the Chamber can begin using
                completed work while the larger website continues to be built.
              </p>

              <p>
                Future Expansion Menu items are separate from the initial
                $4,000 build and would require separate approval.
              </p>
            </div>
          )}
        </section>

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

export default InteractiveBuildPlan;