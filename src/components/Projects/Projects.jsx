/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../../assets/css/projects.css";

function ProjectCard({ state }) {
  let stateArray = Array(state.length).fill(false);
  const [showDetail, setShowDetail] = useState(stateArray);
  const projectCard = state.map((item, index) => {
    return (
      <>
        <div className="projectCardContainer" key={item.title}>
          <div
            onClick={() => {
              window.open(item.link, "blank");
            }}
            className="projectCardWrapper"
          >
            <h4>{item.title}</h4>
            <img src={item.image} alt={item.alt} />
          </div>
          <div
            className="projectCardButton"
            onClick={() => {
              showDetail[index] = !showDetail[index];
              setShowDetail([...showDetail]);
            }}
          >
            <button>Click For More Info</button>
          </div>
          <div
            className={`${
              showDetail[index] ? "showProjectDetail" : "hideProjectDetail"
            } projectCardDetailWrapper`}
          >
            <p>{item.description}</p>
            <a href={item.link}>link</a>
          </div>
        </div>
      </>
    );
  });
  return <div className="projects">{projectCard}</div>;
}
function Projects(props) {
  const input = props.project.slice(0, props.n);
  let [projectCardAdder, setProjectCardAdder] = useState(
    input.map((item) => item)
  );

  // eslint-disable-next-line no-unused-vars
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
      <ProjectCard state={projectCardAdder} />
    </div>
  );
}

export default Projects;
