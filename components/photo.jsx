"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Image with subtle scale animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-[298px] h-[298px] sm:w-[498px] sm:h-[498px] xl:w-[498px] xl:h-[498px] mix-blend-lighten relative"
        >
          <Image
            src="/photo/unnamed.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
        
        {/* Animated Square SVG */}
        <motion.svg
          className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] xl:w-[500px] xl:h-[500px]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              rotate: [0, 360, 0],
              strokeDasharray: ["0 1", "1 0", "0 1"]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            x="2"
            y="2"
            width="496"
            height="496"
            stroke="#00ff99"
            strokeWidth="4"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
