"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ExplodingParticleButton = ({ children, href, className }) => {
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  const handleClick = (e) => {
    // Generate an array of particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100, // Random x position
      y: Math.random() * 200 - 100, // Random y position
    }));
    setParticles(newParticles);

    // Navigate after a short delay
    setTimeout(() => {
      router.push(href);
    }, 500);

    // Clear particles after animation
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      >
        {children}
      </motion.button>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            x: particle.x,
            y: particle.y,
          }}
          transition={{ duration: 1 }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{ top: '50%', left: '50%' }}
        />
      ))}
    </div>
  );
};

export default ExplodingParticleButton;
