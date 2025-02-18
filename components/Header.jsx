"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Nav from "./Nav";
import MobileNav from "./MobileNav"; // Adjust the path if necessary

const Header = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const stairs = 5; // Number of stairs for the transition

  const handleNameClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    setIsAnimating(true); // Start the animation

    // Navigate to the home page after the animation completes
    setTimeout(() => {
      router.push("/");
      setIsAnimating(false); // Reset animation state
    }, stairs * 0.1 * 1000 + 500); // Total duration: delay * stairs + animation duration
  };

  const stairVariants = {
    initial: (i) => ({
      x: "100%",
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
    }),
    animate: (i) => ({
      x: "-100%",
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Name with Stair Transition */}
        <Link href="/" onClick={handleNameClick}>
          <h1 className="text-4xl font-semibold cursor-pointer">
            Svastik Arora<span className="text-accent"></span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center">
          <Nav />
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
            <MobileNav />
        </div>
      </div>

      {/* Stair Transition */}
      {isAnimating && (
        <div className="fixed inset-0 z-50">
          {[...Array(stairs)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={stairVariants}
              initial="initial"
              animate="animate"
              style={{
                position: "fixed",
                top: `${(i / stairs) * 100}%`,
                left: 0,
                right: 0,
                height: `${100 / stairs}%`,
                backgroundColor: "#000", // Change this to match your design
                zIndex: 50,
              }}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
