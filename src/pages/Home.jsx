import Portrait from "../assets/portrait.png";
import "../styles/HomePage.scss";

export default function Home() {
  return (
    <div className="mt-3 home-page">
      <div className="row">
        <div className="col">
          <h1 className=" home-title p-5">
            Hi, I'm Collin <br /> Web developer. <br />
            Full Stack Dev
          </h1>
          <div className="row">
            <p className="text-content">
              Recently earned a certificate in full stack development from edX
              Coding Bootcamp and developed skills in Javascript, Css, React.js,
              and many more. Known for creating innovative apps and pushing the
              project to its best. Aim for each project to impress all users to
              enjoy the experience.
            </p>
          </div>
        </div>

        <div className="col portrait-container">
          <img
            className="self-picture"
            src={Portrait}
            alt="picture of myself"
          />
        </div>
      </div>
    </div>
  );
}
