import React from "react";
import { motion } from "framer-motion";
export const Tappable = () => {
  return (
    <>
      <motion.div
        className=" flex items-center justify-center "
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95, y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-blue-200 p-2.5 border-2 border-l-black"
        >
          this is tappable
        </motion.button>
      </motion.div>
    </>
  );
};
