import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Add this line
import "@fortawesome/fontawesome-svg-core/styles.css";
import IconButton from "../ui/IconButton";

const CallToAction = () => {
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
        href="https://www.linkedin.com/in/samersawan1/"
      />
      {/*TODO: ADD CONTACT FORUM OR HREF THAT OPENS MAIL APP */}
      <IconButton icon={faEnvelope} />
    </div>
  );
};

export default CallToAction;
