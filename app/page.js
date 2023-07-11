import Button from "./components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons"; // Add this line
import "@fortawesome/fontawesome-svg-core/styles.css";
import IconButton from "./components/ui/IconButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-8/12 items-center ">
        <div className="mt-20 w-3/5">
          <div>
            <div className="text-honeydew text-xl">Hi, my name is</div>
            <div className="text-aquamarine font-bold text-4xl">
              Samer Sawan
            </div>
            <div className="text-honeydew text-xl w-128">
              a passionate software engineer dedicated to delivering innovative
              solutions and creating impactful outcomes.
            </div>
          </div>

          <div className="space-x-12 ml-12">
            <Button
              icon={faGithub}
              text={"GitHub"}
              href="https://github.com/SamerSawan"
            />
            {/*TODO: ADD HREF OR NEW PAGE TO RESUME*/}
            <Button icon={faFileAlt} text="Resume" />
          </div>

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
