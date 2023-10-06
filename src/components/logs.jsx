import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "./atoms/Tabs";
import Wrapper from "./atoms/Wrapper";

const data = [
  "horizon zero dawn", //data definitely needs to become objects for images and shit
  "persona 5",
  "the witcher 3",
  "portal 2",
  "half-life 2",
  // "payday 3",
  // "overlord 2",
  // "shows"
];

const data2 = [
  "the witcher 2",
  "team fortress 2",
  "payday 2",
  "spec ops: the line",
  "gris",
];

const tabs = ["Backlog", "Playing"];

function LogCard({ name }) {
  const yes = {
    hidden: { y: "-100vh" },
    show: { y: 0 },
  };

  return (
    <motion.div
      variants={yes}
      className="flex flex-wrap dark-wrapper w-full h-1/6 shrink-0 test"
    >
      <span className="reg-text"> {name} </span>
    </motion.div>
  );
}

//TODO: style scrollbar (viewing page on edge is weird)
function GameLog() {
  const [selected, setSelected] = useState(tabs[0]);
  //TODO: implement fetcher for backlog data

  const cont = {
    // hidden: {scale: 1},
    show: {
      scale: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Wrapper className="dark-wrapper w-1/4 h-3/4 overflow-hidden">
      <Wrapper className="wrapper h-full w-full">
        <Tabs
          setSelected={setSelected}
          selected={selected}
          layoutId="logTabs"
          tabs={tabs}
        />

        <AnimatePresence mode="wait">
          <motion.div
            className="flex flex-col rounded-xl w-full h-full gap-2 overflow-y-scroll" //this needs to change
            key={selected}
            initial="hidden"
            animate="show"
            variants={cont}
          >
            {selected === "Backlog"
              ? data.map((game) => <LogCard name={game} />)
              : data2.map((game) => <LogCard name={game} />)}
          </motion.div>
        </AnimatePresence>
      </Wrapper>
    </Wrapper>
  );
}

export default GameLog;
