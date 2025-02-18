"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Resume", path: "/resume" },
  { name: "Work", path: "/work" },
  
];

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [particles, setParticles] = useState([]);

  const handleNavigation = (path, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Generate particles with random colors
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: `${path}-${i}`,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      originX: centerX,
      originY: centerY,
      color: getRandomColor(), // Assign a random color to each particle
    }));
    setParticles(newParticles);

    // Navigate after a short delay
    setTimeout(() => {
      router.push(path);
      setParticles([]); // Clear particles after navigation
    }, 500);
  };

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="flex gap-8">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={(e) => handleNavigation(link.path, e)}
            className={`${
              link.path === pathname ? "text-accent border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Particle Animation */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              x: particle.x,
              y: particle.y,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-2 h-2 rounded-full"
            style={{
              left: particle.originX,
              top: particle.originY,
              backgroundColor: particle.color, // Use the random color
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
