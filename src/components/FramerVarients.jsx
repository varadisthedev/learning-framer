import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // gap between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FramerVarients = () => {
  const items = ["Dashboard", "Profile", "Settings", "Logout"];
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-slate-900">
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-slate-800 p-6 rounded-2xl shadow-xl space-y-3 text-white"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants} // uses hidden/visible states
            className="px-4 py-2 bg-slate-700 rounded-xl"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
