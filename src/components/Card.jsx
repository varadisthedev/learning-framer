import React from "react";
import { motion } from "framer-motion";
// crete a reusable card whichi changes it size when u hover over it from 1.1x to 0.97
export const Card = ({ title, children, onClick }) => {
  return (
    <>
      <motion.div
        className="bg-gray-200 border-2 border-black rounded-lg w-[300px] h-[300px] mt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.97 }}
      >
        {title && (
          <h1 className="text-3xl font-extrabold mt-5 mx-5">{title}</h1>
        )}

        {children && (
          <p className="text-sm font-semibold mt-2 mx-5">{children}</p>
        )}
        {/* 0/1 and 1 */}
      </motion.div>
    </>
  );
};
