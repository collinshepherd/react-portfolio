import Project from "../components/Project";
import pizzaImage from "../assets/pizzapuzzler.png";
import hangmanImage from "../assets/hangman.png";

const projects = [
  {
    projectName: "Pizza Puzzler",
    image: pizzaImage,
    github: "https://github.com/collinshepherd/Pizza-Puzzler",
    deployed: "https://pizza-puzzler-df030c54c16c.herokuapp.com/",
    description:
      "This project is a Pizza RPG game when the player creates pizzas to battle against other chefs to see who has the best pizza!",
  },
  {
    projectName: "Project Hangman",
    image: hangmanImage,
    github: "https://github.com/andria-goodwin/project-hangman",
    deployed: "https://andria-goodwin.github.io/project-hangman/gamepage.html",
    description:
      "This project is a hangman game with 3 categories and 3 difficulties",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1 className="d-flex justify-content-center text-danger my-3">
        Projects
      </h1>
      <div className="m-auto">
        <Project
          name={projects[0].projectName}
          image={projects[0].image}
          github={projects[0].github}
          deployed={projects[0].deployed}
          description={projects[0].description}
        />
        <Project
          name={projects[1].projectName}
          image={projects[1].image}
          github={projects[1].github}
          deployed={projects[1].deployed}
          description={projects[1].description}
        />
      </div>
    </div>
  );
}
