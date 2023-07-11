import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  Splendor,
  RecipeApp,
  StatBot,
  TwitterScraper,
  PortfolioV2,
} from "@/app/assets/images";
import HeroText from "./components/Hero/HeroText";
import ButtonContainer from "./components/Hero/ButtonContainer";
import CallToAction from "./components/Hero/CallToAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import Highlight from "./components/ui/Highlight";
import Job from "./components/Experience/Job";
import ProjectCard from "./components/Projects/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      {/* Nav */}
      <div className="text-honeydew flex justify-end">
        <span className="my-2 mx-8">About</span>
        <span className="my-2 mx-8">Experience</span>
        <span className="my-2 mx-8">Projects</span>
      </div>

      {/*Hero + About*/}
      <div className="flex justify-center">
        <div className="flex w-8/12 min-w-min items-center justify-center">
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
              privilege of working on many team projects, ranging from
              hackathons to course projects at McGill University, with the most
              significant project being Splendor, a board game recreated as a
              web game.
            </p>
            <br></br>
            <p>
              Recently, my main focus has been learning React, as well as
              expanding my knowledge of Data Science and ML, with the aim of
              working on some data visualization projects in the near future.
            </p>
          </div>
        </div>
      </div>

      {/*Tools and Tech Title + highlights*/}
      <div className="flex justify-center">
        <div className="text-emerald text-2xl mt-20 font-semibold">
          Some languages and tools I like to use
        </div>
      </div>
      <div className="flex flex-row justify-center space-x-96 mt-10">
        <div>
          <div className="ml-28">
            <FontAwesomeIcon
              icon={faCode}
              size="xl"
              style={{ color: "#01fcc0" }}
            />
            <span className="text-aquamarine text-xl ml-4">Languages</span>
          </div>
          <div className="grid grid-cols-3 mt-5">
            <Highlight text={"Java"} />
            <Highlight text={"Python"} />
            <Highlight text={"C"} />
            <Highlight text={"JavaScript"} />
            <Highlight text={"SQL"} />
            <Highlight text={"OCaml"} />
          </div>
        </div>
        <div>
          <div className="ml-28">
            <FontAwesomeIcon
              icon={faServer}
              size="xl"
              style={{ color: "#01fcc0" }}
            />
            <span className="text-aquamarine text-xl ml-4">Tools and Tech</span>
          </div>
          <div className="grid grid-cols-3 mt-5">
            <Highlight text={"React"} />
            <Highlight text={"React Native"} />
            <Highlight text={"JUnit"} />
            <Highlight text={"Maven"} />
            <Highlight text={"Spring Boot"} />
            <Highlight text={"FireBase"} />
            <Highlight text={"NextJS"} />
            <Highlight text={"Git"} />
            <Highlight text={"Docker"} />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="flex justify-center text-emerald text-4xl font-bold mt-52">
        Experience
      </div>
      <Job />

      {/* Projects */}
      <div className="flex justify-center text-emerald text-4xl font-bold mt-52">
        Projects
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="grid grid-cols-3">
            <ProjectCard
              text={"Splendor"}
              description={
                "A popular board game recreated as a web game using Vanilla JS for the front end and Java for the backend."
              }
              stack={["Java", "JavaScript", "REST"]}
              src={Splendor}
              position={" object-none object-left"}
            />
            <ProjectCard
              text={"Recipe App"}
              description={
                "A simple recipe app created for me to keep track of my recipes and groceries that I have or need to buy."
              }
              stack={["ReactNative", "ReactContext", "FireBase"]}
              src={RecipeApp}
              position={" object-none object-top"}
            />
            <ProjectCard
              text={"Stat Bot"}
              description={
                "A discord bot that fetches videogame player stats from different websites."
              }
              stack={["Java", "JavaScript", "REST"]}
              src={StatBot}
              position={" object-fill object-left"}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2">
            <ProjectCard
              text={"Twitter Scraper"}
              description={
                "Twitter scraper used to collect and filter user sentiments about 'GhostBusters: Afterlife' for a final project at McGillU"
              }
              stack={["Python", "Tweepy", "TwitterAPI"]}
              src={TwitterScraper}
              position={" object-fill object-left"}
            />
            <ProjectCard
              text={"Portfolio V2"}
              description={
                "Second iteration of my personal website. Created using Next.js and TailwindCSS"
              }
              stack={["Next.js", "TailwindCSS", "JavaScript"]}
              src={PortfolioV2}
              position={" object-fill object-left"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
