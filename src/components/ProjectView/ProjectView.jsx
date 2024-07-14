import Projects from "../Projects/Projects";
import "../../assets/css/projectView.css";

const groupProjects = [
  {
    title: "Hoax Haven",
    image: "./hoax-haven.png",
    description: `Hoax Haven is your one stop shop for fake news! A light-hearted website dedicated to posting false news articles. 
      A group Full-Stack project, primarily focused on backend using ExpressJS, PostgreSQL, React and Redux. 
      This project gave me a real hands on experience with PSQL queries and building relational databases from the ground up. 
      Furthermore, it allowed me to gather experience in planning and building user endpoints in express whilst working with a team to avoid blocking and maintain efficient workflow.`,
    alt: "A brightly coloured homepage for a fake-news website",
    link: "https://github.com/Sebbybobbler/HoaxHaven",
    website: "https://hoax-haven.netlify.app/",
  },
  {
    title: "Dargon AI",
    image: "./dagron-limited.png",
    description: `A Group Frontend project, built using React, Javascript, Redux, CSS, React Router, Font Awesome, a RESTful API and chatGPT API to provide dragon 
    themed AI responses to questions. This project filled me with confidence with using React, Redux and obtaining data via an API. This project was designed to a client brief and
    to a strict deadline. During this project we remained on an all-day call to simulate an in-person workplace and benefited hugely from collaboration.`,
    alt: "Dragon themed AI question bot",
    link: "https://github.com/Sebbybobbler/dragon",
    website: "https://dagron-limited.netlify.app/",
  },
  {
    title: "Peeling Good",
    image: "./banana-portfolio.png",
    description: ` Peeling Good is a banana e-commerce frontend group project created near the beginning of the TechNativeAcademy bootcamp created using HTML, CSS & Vanilla JavaScript. 
     I enjoyed creating the logic of JavaScript elements within the website.`,
    alt: "homepage of banana merchants website",
    link: "https://github.com/Sebbybobbler/portfolio-banana",
    website: "https://technative-academy.github.io/banana/",
  },
];
const reactProjects = [
  {
    title: "React-Redux Playground",
    image: "./react-redux-playground.png",
    description: `React App incorporating Redux and Async Thunks to fetch dad-jokes using an API. There is also a page which incorporates a tic-tac-toe game, 
      incorporating props and statefulness of React.`,
    alt: "A site with a button which fetches a new dad-joke every time you click it.",
    website: "https://grand-sunshine-dde8c5.netlify.app/",
    link: "https://github.com/Sebbybobbler/react-redux-playground",
  },
  {
    title: "Appointment Planner",
    image: "./appointment-planner.png",
    description:
      "A basic React appointment planner and contact diary. This uses React hooks to store state.",
    alt: "A planner to enter contact name, number and email",
    link: "https://github.com/Sebbybobbler/appointment-planner",
    website: "https://marvelous-bonbon-bb3ab5.netlify.app/contacts",
  },
];
const backendProjects = [
  {
    title: "Boss-Machine",
    image: "./boss-machine.png",
    description: `A backend project, Frontend pre-built, which allows users to create, update and delete "minions" for the boss machine.
     Built using expressJS.`,
    alt: "A boss-machine which uses an API to add, delete and update minions and other things",
    link: "https://github.com/Sebbybobbler/boss-machine",
  },
  {
    title: "catAPI",
    image: "./cat-api.png",
    description:
      "An API built to record, fetch and randomise cats. On fetch random cat there is some basic html injected from the backend via expressJS.",
    alt: "A paint picture of a cat, with a description and a name.",
    website: "https://catapi-pf3j.onrender.com/randomcat",
    link: "https://github.com/Sebbybobbler/catAPI",
  },
];
const otherProjects = [
  {
    title: "Homers Website",
    image: "./homers-website.png",
    description: `CLICK AT OWN RISK: recreation of Homer's website from the 2000 episode of the Simpson's 'The Computer Wore Menace Shoes'. A very annoying and light-hearted website created
      in React as an homage to the Simpsons.`,
    alt: "Picture of random gifs assorted on page.",
    website: "https://homers-website.netlify.app/",
    link: "https://github.com/Sebbybobbler/homer-react",
  },
  {
    title: "Space Adventure",
    image: "./spaceadventure-portfolio.png",
    description:
      "Frontend project built using HTML & CSS, plan your own space adventure!",
    alt: "Homepage of a interspace travel agency",
    link: "https://github.com/Sebbybobbler/portfolio-space-adventures",
    website: "https://sebbybobbler.github.io/portfolio-space-adventures/",
  },
  {
    title: "Solar System",
    image: "./planet-portfolio.png",
    description:
      "JavaScript project using vanilla JavaScript to display different elements using the DOM. Also utilises the Date object in JavaScript to do calculations for date's on other planets.",
    alt: "Homepage of solar system website",
    link: "https://github.com/Sebbybobbler/portfolio-solar-system",
    website: "https://sebbybobbler.github.io/portfolio-solar-system/",
  },

  {
    title: "Physics Particle Predictor",
    image: "./machine-learning.png",
    description: `Machine Learning project created in Python and using SciKitLearn, Pandas, NumPy and Matplotlib. Model trained on particle data to inform whether hypothetical particle is discoverable. 
      Project uses stacking methods to combine multiple different classifiers to improve accuracy.`,
    link: "https://github.com/Sebbybobbler/Machine-Learning-Particle-Rank-Predictor-Portoflio/tree/main",
  },
  {
    title: "NHS Wait Time Analysis",
    image: "./data-science.png",
    description: `A data science project created in Python. Created to analyse wait times for consultant diagnostic appointments. Uses Pandas, NumPy and Matplotlib.
     Also I draw some statistical inference from the data.`,
    link: "https://github.com/Sebbybobbler/Data-Science-NHS-wait-times-analysis-portfolio/tree/main",
  },
];
function ProjectView() {
  return (
    <div className="projectViewWrapper">
      <div className="projectHeading">
        <h2>
          <strong>PROJECTS</strong>
          <hr />
        </h2>
      </div>
      <div className="groupProjectSection">
        <h4 className="projectSectionHeading">
          <em>Group Projects </em>
        </h4>
        <Projects project={groupProjects} n={3} />
      </div>

      <div className="reactProjectSection">
        <h4 className="projectSectionHeading">
          <em>React Projects </em>
        </h4>
        <Projects project={reactProjects} n={2} />
      </div>

      <div className="backendProjectSection">
        <h4 className="projectSectionHeading">
          <em>Backend Projects</em>
        </h4>
        <Projects project={backendProjects} n={2} />
      </div>

      <div className="otherProjectSection">
        <h4 className="projectSectionHeading">
          <em>Other Projects</em>
        </h4>
        <Projects project={otherProjects} n={otherProjects.length} />
      </div>
    </div>
  );
}

export default ProjectView;
