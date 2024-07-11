/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../../assets/css/projects.css";
import FadeIn from "react-fade-in";

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
        <p className="description">{item.description}</p>
      </div>
    );
  });
  return <div className="projects">{projectCard}</div>;
}
function Projects(props) {
  const input = props.project.slice(0, props.n);
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

  function handleClick() {
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
    <div className="projectComponent">
      <FadeIn delay={200} transitionDuration={500}>
        <ProjectCard state={projectCardAdder} />
      </FadeIn>
      {isButton}
    </div>
  );
}

export default Projects;
