import "../../assets/css/intro.css";
import { NavLink } from "react-router-dom";
function Intro() {
  return (
    <div className="contentBoxWrapper">
      <div className="contentBoxIntro">
        <h2>
          SEBASTIAN DAVIES
          <hr />
        </h2>
        <h4>
          <em>Full-Stack Developer </em>
        </h4>
        <div className="contentIntroButtonsWrapper">
          <NavLink
            className="contentIntroButtons"
            key={"projects"}
            to={"/projects"}
          >
            <strong>PROJECTS</strong>
          </NavLink>
          <NavLink
            className="contentIntroButtons"
            key={"contact"}
            to={"/contact"}
          >
            <strong>CONTACT</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Intro;
