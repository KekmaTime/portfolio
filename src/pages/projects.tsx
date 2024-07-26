import { useState } from "react";
import { WobbleCard } from "../components/ui/wobble-card";
import { MultiStepLoader } from "../components/ui/multi-step-loader";

const Projects = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [githubLink, setGithubLink] = useState("");

  const handleCardClick = (link: string) => {
    setGithubLink(link);
    setShowLoader(false); // Reset the loader state
    setTimeout(() => setShowLoader(true), 0); // Re-enable the loader state
  };

  const loadingStates = [
    { text: "Loading..." },
    { text: "Almost there..." },
    { text: "Ready!" },
  ];

  return (
    <div className="flex flex-col items-center gap-6 mx-auto bg-neutral-950 p-6">
      <div onClick={() => handleCardClick("https://github.com/KekmaTime/AutoBlog")}>
        <WobbleCard containerClassName="w-full max-w-md bg-neutral-800 min-h-[300px] lg:min-h-[400px] rounded-xl self-start">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
              AutoBlog - Next.js, OpenAI, MongoDB, Auth0
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              AutoBlog is a web app that generates SEO-optimized blog posts using OpenAI's GPT-3.5-turbo. Built with Next.js, it features secure authentication via Auth0, MongoDB for data storage, and a responsive design with Tailwind CSS.
            </p>
          </div>
        </WobbleCard>
      </div>
      <div onClick={() => handleCardClick("https://github.com/KekmaTime/Duocode")}>
        <WobbleCard containerClassName="w-full max-w-md bg-neutral-850 min-h-[300px] lg:min-h-[400px] rounded-xl self-end">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
              Duocode - TypeScript, Next.js, Drizzle, Tailwind CSS, Docker
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Duocode is a platform for programmers to engage in pair programming via video calls, enabling real-time collaboration, screen sharing, and code editing. Boost productivity with seamless communication and efficient code development.
            </p>
          </div>
        </WobbleCard>
      </div>
      <div onClick={() => handleCardClick("https://github.com/KekmaTime/Ironkey")}>
        <WobbleCard containerClassName="w-full max-w-md bg-neutral-950 min-h-[300px] lg:min-h-[400px] rounded-xl self-start">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
              Ironkey - Rust, Crossterm, Ratatui
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Ironkey is a TUI-based password generator and manager built with Rust. It features customizable password generation with options for length, symbols, numbers, and cases. Passwords can be saved and exported to JSON or CSV formats. Clipboard support allows for quick copying of passwords. Leveraging Rust's performance and safety features, IronKey ensures a fast and secure experience. With over 1500 downloads, it's a trusted tool for password generation.
            </p>
          </div>
        </WobbleCard>
      </div>
      <div onClick={() => handleCardClick("https://github.com/KekmaTime/http-rs")}>
        <WobbleCard containerClassName="w-full max-w-md bg-neutral-900 min-h-[30px] lg:min-h-[40px] rounded-xl self-end">
          <div className="max-w-xs">
            <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-200">
              http.rs - Rust, Rocket, Diesel, Sqlite
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              A RESTful Web API developed in Rust using the Rocket framework and Diesel ORM. It supports CRUD operations for managing data with SQLite as the backend. Features include secure endpoint access via Basic Authentication and efficient database connections.
            </p>
          </div>
        </WobbleCard>
      </div>

      {showLoader && (
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={showLoader}
          duration={2000}
          loop={false}
          onComplete={() => window.open(githubLink, "_blank")}
          onEscape={() => setShowLoader(false)}
        />
      )}
    </div>
  );
};

export default Projects;
