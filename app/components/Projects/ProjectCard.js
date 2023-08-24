'use client'
import Image from "next/image";

import Tech from "./Tech";

const ProjectCard = ({ text, description, stack, src, position, href, alt }) => {
  const handleClick = () => {
    window.open(href, "_blank", "noreferrer");
  };

  return (
    <div className="bg-darkgreen w-full md:w-96 rounded-xl md:mx-10 mt-10 shadow-lg shadow-slate-600 transition duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-aquamarine">
      <button onClick={handleClick}>
      <Image
        className={"rounded-t-xl md:h-56" + position}
        src={src}
        width={500}
        height={500}
        alt={alt}
      />
      <div className="flex justify-center text-aquamarine text-xl md:text-2xl font-semibold mt-2">
        {text}
      </div>
      <div className="flex justify-center text-honeydew">
        <p className="text-sm md:text-base mx-2 md:mx-0 md:w-72 h-20 mb-2">
          {description}
        </p>
      </div>
      <div className="flex justify-center flex-wrap">
        <Tech text={stack[0]} />
        <Tech text={stack[1]} />
        <Tech text={stack[2]} />
      </div>
      </button>
    </div>
  );
};

export default ProjectCard;
