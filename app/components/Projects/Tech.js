const Tech = ({ text }) => {
  return (
    <div className="flex flex-wrap text-sm md:text-base my-2 md:my-4 mx-1 md:mx-2 text-honeydew border-emerald border-2 rounded-3xl px-2">
      <span>{text}</span>
    </div>
  );
};

export default Tech;
