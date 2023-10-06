import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

function Wrapper({ className, animate, children }) {
  return (
    <motion.div
      animate={animate}
      className={classNames("flex flex-wrap gap-2 justify-center", className)}
    >
      {children}
    </motion.div>
  );
}

export default Wrapper;
