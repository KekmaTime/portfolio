"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import About from "../../pages/about";

export const AboutLoader = ({
  loading,
  onEscape,
}: {
  loading?: boolean;
  onEscape?: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(loading);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
        if (onEscape) {
          onEscape();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEscape]);

  useEffect(() => {
    setIsVisible(loading);
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl"
        >
          <div className="h-96 relative">
            <About />
          </div>
          <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-neutral h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};