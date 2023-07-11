import Button from "../ui/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const ButtonContainer = () => {
  return (
    <div className="space-x-12 ml-12">
      <Button
        icon={faGithub}
        text={"GitHub"}
        href="https://github.com/SamerSawan"
      />
      {/*TODO: ADD HREF OR NEW PAGE TO RESUME*/}
      <Button icon={faFileAlt} text="Resume" />
    </div>
  );
};

export default ButtonContainer;
