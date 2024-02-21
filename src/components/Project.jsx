import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ProjectPage.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Project(props) {
  return (
    <div className="row project-container">
      <div className="col">
        <h1 className="project-title d-flex justify-content-center">
          {props.name}
        </h1>
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center fs-2">{props.description}</p>
            <div className="d-flex justify-content-center icon-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.github}
                className="project-gh-link pe-5"
              >
                <FontAwesomeIcon icon={faGithub} color="#ffd700" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.deployed}
                className="project-deployed-link"
              >
                <FontAwesomeIcon icon={faPaperPlane} color="#ffd700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
