"use client";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { Spotlight } from "../components/ui/spotlight";

const Home = () => {
  const greetings = ['hello.', 'bonjour.', 'こんにちは.'];
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex items-center justify-center antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="max-w-2xl mx-auto p-4 text-left relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-left font-sans font-bold">
          <FlipWords words={greetings} className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-left font-sans font-bold" />
          <br />
          i&apos;m
          <br />
          <span className="relative z-20">ananth.</span>
        </h1>
        <p className="text-neutral-400 max-w-lg my-4 text-lg relative z-10">
          I&apos;m a Full Stack Developer who uses MERN and T3 stack, passionate about building scalable web applications. Currently exploring Rust, DevOps tools, and shell scripting.
        </p>
      </div>
    </div>
  );
};

export default Home;
