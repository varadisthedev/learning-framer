import React from "react";
import { motion } from "framer-motion";

export const PulseCircle = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-slate-900">
      <motion.div
        className="w-50 h-50 rounded-full bg-emerald-400"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
      ></motion.div>
    </div>
  );
};
