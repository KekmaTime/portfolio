import Head from "next/head";
import Home from "./home";
import Navbar from "./Navbar";
import Projects from "./projects";

export default function index() {
  return (
    <>
      <Head>
        <title>Testing</title>
      </Head>
      <main className="overflow-hidden">
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </main>
    </>
  );
}