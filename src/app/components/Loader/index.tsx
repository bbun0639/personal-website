"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const letters = ["h", "i", ".", "<"];

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex space-x-4"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="text-white text-5xl font-semibold"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
