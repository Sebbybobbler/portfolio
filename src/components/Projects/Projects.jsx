import { useState, useEffect } from "react";
import "../../assets/css/projects.css";
// import banana from "./banana-portfolio.png";
// import planet from "./planet-portfolio.png";
// import adventures from "./spaceadventure-portfolio.png";
// import filter from "../../assets/images/filter-portfolio.png";
// import homer from "../../assets/images/homers-website.png";

function ProjectCard({ state }) {
  const projectCard = state.map((item) => {
    return (
      <div
        onClick={() => {
          window.open(item.link, "blank");
        }}
        className="projectCardWrapper"
        key={item.title}
      >
        <h4>{item.title}</h4>
        <img src={item.image} alt={item.alt} />
        <span className="description">{item.description}</span>
      </div>
    );
  });
  return <div className="projects">{projectCard}</div>;
}
function Projects(props) {
  const input = props.project.slice(0, props.n);
  console.log(input);
  let [projectCardAdder, setProjectCardAdder] = useState(
    input.map((item) => item)
  );

  const [isButton, setIsButton] = useState(
    <button className="showMoreButton" onClick={handleClick}>
      Show More
    </button>
  );

  useEffect(() => {
    if (projectCardAdder.length === props.project.length) {
      setIsButton(<></>);
    }
  }, [projectCardAdder]);

  function handleClick(event) {
    if (projectCardAdder.length === props.project.length) {
      return;
    }
    setProjectCardAdder((prev) => {
      if (!props.project[prev.length + 1]) {
        return [...prev, props.project[prev.length]];
      }
      return [
        ...prev,
        props.project[prev.length],
        props.project[prev.length + 1],
      ];
    });
  }

  return (
    <div>
      <ProjectCard state={projectCardAdder} />
      {isButton}
    </div>
  );
}

export default Projects;
