import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

function Tabs({ tabs, layoutId, selected, setSelected }) {
  return (
    <Wrapper className="grow max-h-16 dark-wrapper">
      {tabs.map((tab) => (
        <motion.div
          whileTap={{ scale: 0.9 }}
          key={tab}
          onClick={() => {
            setSelected(tab);
          }}
          className="wrapper grow text-center"
        >
          <span className="big-text">{tab}</span>
          {tab === selected && (
            <motion.div
              className="highlight"
              layoutId={layoutId}
              transition={{ duration: 0.35, type: "spring" }}
            >
              {" "}
            </motion.div>
          )}
        </motion.div>
      ))}
    </Wrapper>
  );
}

export default Tabs;
