"use client";
import React from "react";
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/8bitpix.png" alt="Ananth" width={120} height={120} className="w-30 h-30 rounded-full" />
      <p className="text-center text-base text-neutral-400 font-semibold max-w-4xl pb-2">
        Ananth Prathap is a highly skilled 20-year-old 3rd-year student specializing in full stack development with expertise in MERN (MongoDB, Express, React, Node.js) and T3 (TypeScript, TailwindCSS, tRPC) stacks, creating efficient and scalable web applications while handling both front-end and back-end development. Currently exploring new technologies like Rust and delving into DevOps tools and shell scripting, he focuses on building reliable software and staying updated with tech trends. He is a Software Engineering Fellow at Headstarter AI, a top 10% coder at Shipd solving Python and Data Structure/Algorithm challenges, a Technical Lead at CSI SCT SB, a Google DSC Volunteer, a former Frontend Developer Intern at Effervescence, IIIT Allahabad, and a contributor to Hacktoberfest in 2022 and 2023. Eager to connect with others to discuss his work and explore new opportunities, Ananth brings a wealth of knowledge and experience to any project he undertakes.
      </p>
    </div>
  );
};

export default About;