import Intro from "../Intro/Intro";
import "../../assets/css/home.css";
function Home() {
  return (
    <div className="homeWrapper">
      <Intro />

      <div className="homeBioHeading">
        <h3> About Me</h3>
      </div>
      <div className="homeSelfie"> </div>
      <div className="homeBioBody">
        <p>
          Hi there! My name is Sebastian Davies and I'm an ethusiastic
          full-stack developer based in Brighton. I honed both my frontend &
          backend development aptitude during my time at the TechNativeDigital
          full-stack bootcamp. My original background is in theoretical physics
          academia, allowing me to bring a unique and inquisitive approach to
          software development.
        </p>
      </div>
      <div className="homeBioSkills">
        <p>
          <strong>Technical Skills:</strong> During the TechNative Academy
          bootcamp I developed a vast skillset of technical coding ability,
          namely: <strong>HTML</strong>, <strong>CSS</strong>,{" "}
          <strong>JavaScript</strong>, <strong>React</strong>,{" "}
          <strong>Redux</strong>, <strong>Node</strong>, <strong>Python</strong>
          , <strong>Express</strong>,<strong>PostgreSQL</strong>,{" "}
          <strong>Git</strong> & <strong>GitHub</strong>, <strong>Mocha</strong>
          and <strong>Chai</strong>. Whilst having also picked up technical
          skills prior to the bootcamp in C++ and Python libraries such as{" "}
          <strong>Pandas</strong> and <strong>SciKitLearn</strong>
        </p>
      </div>
    </div>
  );
}

export default Home;
