"use client";

import React from 'react';
import { motion } from 'framer-motion';

const StairTransition = ({ children }) => {
  const stairs = 25; // Number of "stairs" in the transition
  
  const containerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };

  const stairVariants = {
    initial: (i) => ({
      x: '100%',
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeInOut' },
    }),
    animate: (i) => ({
      x: '-100%',
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {[...Array(stairs)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={stairVariants}
          initial="initial"
          animate="animate"
          style={{
            position: 'fixed',
            top: `${(i / stairs) * 100}%`,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#000', // Change this to match your design
            zIndex: 50,
          }}
        />
      ))}
      {children}
    </motion.div>
  );
};

export default StairTransition;
