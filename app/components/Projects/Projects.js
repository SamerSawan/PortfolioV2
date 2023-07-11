import ProjectCard from "./ProjectCard";
import {
    Splendor,
    RecipeApp,
    StatBot,
    TwitterScraper,
    PortfolioV2,
  } from "@/app/assets/images";

const Projects = () => {
  return (
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
              "A simple IOS recipe app created for me to keep track of my recipes and groceries that I have or need to buy."
            }
            stack={["ReactNative", "ReactContext", "FireBase"]}
            src={RecipeApp}
            position={" object-fill object-top"}
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
  );
};

export default Projects;
