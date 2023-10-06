import Status from "./components/status";
import Backlog from "./components/logs";
import Charts from "./components/charts";
import GameCard from "./components/gameCard";
import gamebot from "./imgs/gamebot.png";

//TODO: abstract statuses into enums
function HomePage() {
  return (
    <div className="flex flex-wrap bg-discordBg bg-cover h-screen">
      <div className="flex flex-row w-full h-1/5 justify-center items-center gap-4">
        <Status
          pic={gamebot}
          flavor={
            "Lorem ipsum dolor sit ame. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          status={"RUNNING"}
        />
      </div>

      <div className="flex w-full h-4/5 px-4 gap-4">
        <Charts />

        <GameCard />

        <Backlog />
      </div>
    </div>
  );
}

export default HomePage;
