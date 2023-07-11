import Image from "next/image";

import Highlight from "../ui/Highlight";
import Tech from "./Tech";

const ProjectCard = ({text, description, stack, src, position}) => {
  return (
    <div className="bg-darkgreen w-96 rounded-xl mx-10 mt-10 shadow-lg shadow-slate-600">
      <Image
        className={"rounded-t-xl h-56" + position}
        src={src}
        width={500}
        height={500}
        alt="Image of web game Splendor"
      />
      <div className="flex justify-center text-aquamarine text-2xl font-semibold mt-2">
        {text}
      </div>
      <div className="flex justify-center text-honeydew">
        <p className="w-72 h-20 mb-2">
          {description}
        </p>
      </div>
      <div className="flex justify-center flex-wrap">
        <Tech text={stack[0]} />
        <Tech text={stack[1]} />
        <Tech text={stack[2]} />
      </div>
    </div>
  );
};

export default ProjectCard;