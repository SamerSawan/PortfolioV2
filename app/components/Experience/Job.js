const Job = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-darkgreen w-164 py-5 px-5 mt-10 rounded-lg">
        <div className="text-honeydew text-lg lg:text-2xl">
          Specialist @ <span className="text-aquamarine">Apple</span>
        </div>
        <div className="text-honeydew text-sm lg:text-base">
          • Consistently achieved top performance amongst peers by exceeding
          AppleCare and Activation targets by{" "}
          <span className="text-aquamarine">20%</span> for{" "}
          <span className="text-aquamarine">three consecutive </span>
          quarters. <br></br> • Demonstrated strong problem-solving skills by
          assessing customer needs and providing personalized solutions,
          resulting in a
          <span className="text-aquamarine">
            {" "}
            90% customer satisfaction rate
          </span>{" "}
          for three consecutive quarters. <br></br> • Provided technical support
          for iCloud, iOS and macOS by troubleshooting and resolving customer
          issues promptly and effectively.
        </div>
      </div>
    </div>
  );
};

export default Job;
