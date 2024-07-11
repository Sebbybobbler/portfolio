/* eslint-disable react/no-unescaped-entities */
import Intro from "../Intro/Intro";
import "../../assets/css/home.css";
import { NavLink } from "react-router-dom";
import FadeIn from "react-fade-in";
function Home() {
  return (
    <div className="homeWrapper">
      <Intro />
      <div className="homeheadingSelfie">
        <div className="homeBioHeading">
          <h3> About Me</h3>
        </div>
        <div className="homeSelfie"> </div>
      </div>
      <FadeIn delay={200} transitionDuration={500}>
        <div className="picAndText reverse">
          <div className="homeBioBlack">
            <p>
              Hi there! My name is Sebastian Davies and I'm an enthusiastic
              full-stack developer based in Brighton. I honed both my frontend &
              backend development aptitude during my time at the
              TechNativeDigital full-stack bootcamp. My original background is
              in theoretical physics academia, allowing me to bring a unique and
              inquisitive approach to software development. I am veraciously
              curious and love learning.
            </p>
          </div>
          <img className="homePic" src="./presenting.jpg" />
        </div>
        <div className="picAndText">
          <div className="homeBioGrey">
            <p>
              <strong>Technical Skills:</strong> During the TechNative Academy
              bootcamp I developed a vast skillset of technical coding ability,
              namely: <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>Redux</strong>, <strong>Node</strong>,{" "}
              <strong>Python</strong>, <strong>Express</strong>,
              <strong>PostgreSQL</strong>, <strong>Git</strong> &{" "}
              <strong>GitHub</strong>, <strong>Mocha</strong>
              and <strong>Chai</strong>. Whilst having also picked up technical
              skills prior to the bootcamp in C++ and Python libraries such as{" "}
              <strong>Pandas</strong> and <strong>SciKitLearn</strong>.
            </p>
          </div>
          <img src="./project1pic.jpg" className="homePic" />
        </div>
        <div className="picAndText reverse">
          <div className="homeBioBlack">
            <p>
              <strong>Hands On Experience</strong>: Throughout the
              TechNativeDigital Bootcamp I have had real world exposure to
              delivering group projects from start to completion. Projects were
              delivered within a tight deadline and to a client brief and
              culminated in presentations to industry professionals. You can
              find out more about these projects{" "}
              <NavLink
                className="homeBioNav"
                key={"/projects"}
                to={"/projects"}
              >
                here
              </NavLink>
              .
            </p>
          </div>
          <img src="./technativegroup.jpg" className="homePic" />
        </div>
        <div className="picAndText">
          <div className="homeBioGrey">
            <p>
              <strong>Exposure To Industry Experts</strong>: Each week during
              the bootcamp I attended Q&A style talks from industry experts, not
              only in web-development but also in surrounding fields (project
              management, design etc). I also enjoy attending local Brighton
              tech events, such as Async and TechJumpStart. This exposure has
              given me an insight into the real world of development and has
              only made me more excited to jump into that first role!
            </p>
          </div>
          <img src="./arduinoday.jpg" className="homePic" />
        </div>
        <div className="picAndText reverse">
          <div className="homeBioBlack">
            <p>
              <strong>Teamwork</strong>: The bootcamp emphasised a strong
              culture of teamwork and pair-programming and AGILE methodology.
              Honestly, this was frightening at first, however, it is now one of
              my favourite aspects of development. Working closely with others
              has allowed me to grow, share ideas, tech tips and improve via
              code reviews. Group work has also given me the ability to thrive
              within the workplace, contributing and benefiting from shared
              discussion and knowledge.
            </p>
          </div>
          <img src="./finaldaybeach.jpg" className="homePic" />
        </div>
        <div className="picAndText">
          <div className="homeBioGrey">
            <p>
              <strong>Problem Solving</strong>: My background in theoretical
              physics and healthcare service has equipped me with excellent
              logical, mathematical and social problem solving skills. Whilst,
              the bootcamp has nourished this existing skillset I have also
              developed strong technical and cross-functional skills allowing me
              to slot into a developer role and quickly become effective.
            </p>
          </div>
        </div>
        <div className="picAndText reverse ">
          <div className="homeBioBlack homeContact">
            <h4 className="homeBioContactHeading">Get In Touch</h4>
            <p>
              I am eager to hear from you, whether you have any questions or
              comments please feel free to get in touch.
            </p>
            <NavLink
              className="homeBioContactButton"
              key={"contact"}
              to={"/contact"}
            >
              <strong>CONTACT</strong>
            </NavLink>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
