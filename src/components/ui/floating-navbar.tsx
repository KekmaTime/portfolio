"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed inset-x-0 mx-auto border border-white dark:border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-12",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          onClick={navItem.onClick}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-200 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
      <a href="https://drive.google.com/file/d/1U-mdxaCpIOCXAaP8Pn5NG1K33fU_eLDj/view" target="_blank">
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-neutral-200 px-4 py-2 rounded-full">
          <span>Resume</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
      </a>
    </motion.div>
  );
};