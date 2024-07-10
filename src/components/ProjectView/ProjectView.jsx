import Projects from "../Projects/Projects";
import "../../assets/css/projectView.css";

const groupProjects = [
  {
    title: "Peeling Good",
    image: "./banana-portfolio.png",
    description:
      "A group frontend project created using HTML, CSS & Vanilla JavaScript.",
    alt: "homepage of banana merchants website",
    link: "https://github.com/Sebbybobbler/portfolio-banana",
  },
  {
    title: "Dagron AI",
    image: "./dagron-limited.png",
    description:
      "A Group Frontend project, built using React, Redux and RESTful API to provide dragon themed AI responses to questions.",
    alt: "Dragon themed AI question bot",
    link: "https://dagron-limited.netlify.app/",
  },
  {
    title: "Hoax Haven",
    image: "./hoax-haven.png",
    description:
      "A group Full-Stack project, primarily focused on backend using ExpressJS, PostgreSQL and React.",
    alt: "A brightly coloured homepage for a fake-news website",
    link: "https://hoax-haven.netlify.app/",
  },
  // {
  //   title: "Solar System",
  //   image: "./cv-pic.jpg",
  //   description:
  //     "JavaScript project involving JavaScript to display different elements using the DOM.",
  //   alt: "Homepage of solar system website",
  //   link: "https://github.com/Sebbybobbler/portfolio-solar-system",
  // },
  // {
  //   title: "Space Adventure",
  //   image: adventures,
  //   description: "Frontend project utilising flexbox and responsive design.",
  //   alt: "Homepage of a interspace travel agency",
  //   link: "https://github.com/Sebbybobbler/portfolio-space-adventures",
  // },
  // {
  //   title: "Planet Filter",
  //   image: filter,
  //   description: "JavaScript project experimenting with filtering elements",
  //   alt: "Homepage of planets and searchbar",
  //   link: "https://github.com/Sebbybobbler/portfolio-filter",
  // },
  // {
  //   title: "Simpon's React",
  //   image: homer,
  //   description:
  //     "Recreation of Homer Simpson's first website WARNING: CLICK AT OWN RISK",
  //   alt: "Homepage of Homer Simpsons Website.",
  //   link: "https://github.com/Sebbybobbler/homer-react",
  // },
];
const reactProjects = [
  {
    title: "React-Redux Playground",
    image: "./react-redux-playground.png",
    description:
      "React App incorporating Redux and Async Thunks fetch data using an API. Also incorporating tic-tac-toe.",
    alt: "A site with a button which fetches a new dad-joke every time you click it.",
    link: "https://grand-sunshine-dde8c5.netlify.app/",
  },
  {
    title: "Appointment Planner",
    image: "./appointment-planner.png",
    description: "A basic React appointment planner and contact diary.",
    alt: "A planner to enter contact name, number and email",
    link: "https://marvelous-bonbon-bb3ab5.netlify.app/contacts",
  },
];
const backendProjects = [
  {
    title: "Boss-Machine",
    image: "./boss-machine.png",
    description: "Backend built in expressJS using CRUD principles.",
    alt: "A boss-machine which uses an API to add, delete and update minions and other things",
    link: "https://github.com/Sebbybobbler/boss-machine",
  },
  {
    title: "catAPI",
    image: "./cat-api.png",
    description:
      "An API built to record, fetch and randomise cats. Frontend is very basic html.",
    alt: "A paint picture of a cat, with a description and a name.",
    link: "https://catapi-pf3j.onrender.com/randomcat",
  },
];
function ProjectView() {
  return (
    <div>
      <div className="projectHeading">
        <h2>
          <strong>PROJECTS</strong>
          <hr />
        </h2>

        <h4>
          <em>Group Projects </em>
        </h4>
      </div>
      <div className="groupProjectSection">
        <Projects project={groupProjects} n={3} />
      </div>
      <div className="projectHeading">
        <h4>
          <em>React Projects </em>
        </h4>
      </div>
      <div className="reactProjectSection">
        <Projects project={reactProjects} n={2} />
      </div>
      <div className="projectHeading">
        <h4>
          <em>Backend Projects</em>
        </h4>
      </div>
      <div className="backendProjectSection">
        <Projects project={backendProjects} n={2} />
      </div>
    </div>
  );
}

export default ProjectView;
