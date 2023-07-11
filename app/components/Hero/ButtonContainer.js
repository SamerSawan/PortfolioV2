'use client'
import Button from "../ui/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ButtonContainer = () => {
    const handleClick = () => {
        window.open("https://github.com/SamerSawan", "_blank", "noreferrer")
    };

  return (
    <div className="space-x-12 ml-12">
      <Button
        icon={faGithub}
        text={"GitHub"}
        onClick={handleClick}
      />
      {/*TODO: ADD HREF OR NEW PAGE TO RESUME*/}
    <Link href="/resume">
        <Button icon={faFileAlt} text="Resume" />
    </Link>
    </div>
  );
};

export default ButtonContainer;
