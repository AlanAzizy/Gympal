import { Link, useLocation  } from "react-router-dom";
import { Setting } from "react-iconly";
import { useState, useEffect } from "react";
export function Navbar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/class") {
      setActiveTab("class");
    } else {
      setActiveTab("profile");
    }
  }, [location.pathname]);

  const isTabActive = (tab) => tab === activeTab;
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 bg-transparent">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav w-25 justify-content-evenly align-items-center">
              <Link to="/" className={`nav-link ${isTabActive("profile") ? "active fw-bold" : ""} text-light`}>
                Profile
              </Link>
              <Link to="/class" className={`nav-link ${isTabActive("class") ? "active fw-bold" : ""} text-light`}>
                Class
              </Link>
              <li className="nav-link text-light">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn text-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                      <style
                        dangerouslySetInnerHTML={{
                          __html: "svg{fill:#ffffff}",
                        }}
                      />
                      <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <button class="dropdown-item border-bottom" type="button">
                        Change of instructor for yoga class
                        <p
                          className="lead mt-1"
                          style={{ fontSize: "14px", color: "#847F7F" }}
                        >
                          15 minutes ago
                        </p>
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Active membership period will expire
                        <p
                          className="lead mt-1"
                          style={{ fontSize: "14px", color: "#847F7F" }}
                        >
                          5 daysago
                        </p>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
              <Link to="/class" className="nav-link text-light">
                <Setting />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
