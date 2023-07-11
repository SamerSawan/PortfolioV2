'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Add this line
import "@fortawesome/fontawesome-svg-core/styles.css";
import IconButton from "../ui/IconButton";

const CallToAction = () => {
    const handleClick = () => {
        window.open("https://www.linkedin.com/in/samersawan1/", "_blank", "noreferrer")
    };

  return (
    <div className="text-honeydew text-2xl mt-10 ml-12 w-50">
      <span>Get in touch</span>
      <FontAwesomeIcon
        className="ml-4"
        icon={faArrowRight}
        style={{ color: "#dff1e5" }}
        size="1xs"
      />
      <IconButton
        icon={faLinkedin}
        onClick={handleClick}
      />
      <a href='mailto:samersawan123@gmail.com'>
        <IconButton icon={faEnvelope} />
      </a>
    </div>
  );
};

export default CallToAction;
