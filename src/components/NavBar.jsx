import "../styles/NavBar.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className={showNav ? "d-none" : "mobile-icon"}
        />

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className={showNav ? "close-icon" : "d-none"}
        />

        <ul
          className={
            showNav ? "mobile-view transition" : "nav justify-content-end "
          }
        >
          <li className="nav-item me-5 ">
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#ffd700" />
            </NavLink>
          </li>
          <li className="nav-item me-5 ">
            <NavLink
              exact="true"
              activeclassname="active"
              className={"about-link"}
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#ffd700" />
            </NavLink>
          </li>
          <li className="nav-item me-5 ">
            <NavLink
              exact="true"
              className={"resume-link"}
              activeclassname="active"
              to="/resume"
            >
              <FontAwesomeIcon icon={faBook} color="#ffd700" />
            </NavLink>
          </li>
          <li className="nav-item me-5 ">
            <NavLink
              exact="true"
              className={"portfolio-link"}
              activeclassname="active"
              to="/portfolio"
            >
              <FontAwesomeIcon icon={faSuitcase} color="#ffd700" />
            </NavLink>
          </li>
          <li className="nav-item me-5 ">
            <NavLink
              exact="true"
              className={"contact-link"}
              activeclassname="active"
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#ffd700" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
