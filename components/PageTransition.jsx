"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // For App Router

const PageTransition = ({ children }) => {
    const pathname = usePathname(); // Get the current route path

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
