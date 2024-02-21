import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <ul className="d-flex justify-content-end">
        <li className="nav-item me-5 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/collinshepherd"
            className="github-link"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffd700" />
          </a>
        </li>
        <li className="nav-item me-5 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/collin-shepherd-bba52929a/"
            className="linkedin-link"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffd700" />
          </a>
        </li>
      </ul>
    </div>
  );
}
