import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className="contactHeading">
        <h2>
          <strong>CONTACT</strong>
          <hr />
        </h2>
        <h4>
          <em>Sebastian Davies </em>
        </h4>
      </div>
      <div className="contactBioWhite">
        <p>
          I would love to hear from you if you have any questions or
          opportunities.
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:seb_davies@hotmail.co.uk">seb_davies@hotmail.co.uk</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +44 7341 457156
        </p>
        <p>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sebastian-davies-496386199/"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a target="_blank" href="https://github.com/Sebbybobbler">
            GitHub
          </a>
        </p>
      </div>
    </>
  );
}

export default Contact;
