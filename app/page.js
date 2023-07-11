import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Add this line
import "@fortawesome/fontawesome-svg-core/styles.css";
import IconButton from "./components/ui/IconButton";
import HeroText from "./components/Hero/HeroText";
import ButtonContainer from "./components/Hero/ButtonContainer";
import CallToAction from "./components/Hero/CallToAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-8/12 items-center ">
        <div className="mt-20 w-3/5">
          <HeroText />
          <ButtonContainer />
          <CallToAction />
        </div>
        <div className="bg-darkgreen text-honeydew text-lg rounded-lg w-150 py-3 px-6 mt-16">
          <p>
            My journey began in my senior year in high school where I built a
            simple brick breaker game using Unity and C#. Since then, I’ve
            developed a strong foundation in various programming languages and
            frameworks, including Python, Java and React. I’ve also had the
            privilege of working on many team projects, ranging from hackathons
            to course projects at McGill University, with the most significant
            project being Splendor, a board game recreated as a web game.
          </p>
          <br></br>
          <p>
            Recently, my main focus has been learning React, as well as
            expanding my knowledge of Data Science and ML, with the aim of
            working on some data visualization projects in the near future.
          </p>
        </div>
      </div>
    </main>
  );
}
