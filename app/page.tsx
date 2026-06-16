"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SidePanel from "./components/SidePanel";
import projects from "./data/projects.json";
import { Project } from "./types/project";

const AboutMeContent = dynamic(() => import("./components/AboutMeContent"));
const ProjectsContent = dynamic(() => import("./components/ProjectsContent"));
const SpecifiedProjectContent = dynamic(
  () => import("./components/SpecifiedProjectContent"),
);

export default function Main() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [specifiedProjectOpen, setSpecifiedProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setSpecifiedProjectOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-[#08080c] text-[#F8F8F8]">
      <div className="relative flex flex-col flex-1 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="grid-bg w-full h-full" />
        </div>

        <header
          className={`h-48 flex flex-col justify-end transition-all duration-300 ease-in-out
          ${aboutOpen || projectsOpen || specifiedProjectOpen ? "px-16" : "md:px-64 md:pr-0 px-16"}`}
        >
          <button
            className="flex flex-col items-start w-xs hover:cursor-pointer hover:bg-[#E05D5D]"
            onClick={() => {
              setAboutOpen(false);
              setProjectsOpen(false);
              setSpecifiedProjectOpen(false);
            }}
          >
            <h1 className="text-5xl font-medium">Neil Dinglasa</h1>
            <h2 className="text-3xl text-[#B2B8C2]">UI/UX Designer</h2>
          </button>
        </header>

        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            aboutOpen || projectsOpen || specifiedProjectOpen
              ? "px-16"
              : "md:px-64 md:pr-0 px-16"
          }`}
        >
          <div className="flex flex-col mt-24 gap-16">
            <button
              className={`text-3xl text-left w-xs hover:cursor-pointer hover:bg-[#E05D5D] ${
                aboutOpen ? "bg-[#E05D5D]" : ""
              }`}
              onClick={() => {
                setAboutOpen(true);
                setProjectsOpen(false);
                setSpecifiedProjectOpen(false);
              }}
            >
              | About Me
            </button>

            <button
              className={`text-3xl text-left w-xs hover:cursor-pointer hover:bg-[#E05D5D] ${
                projectsOpen ? "bg-[#E05D5D]" : ""
              }`}
              onClick={() => {
                setProjectsOpen(true);
                setAboutOpen(false);
                setSpecifiedProjectOpen(false);
              }}
            >
              | Projects
            </button>
          </div>
        </main>
      </div>

      <footer
        className={`h-32 lg:h-48 flex flex-col justify-center bg-[#0d0d11] transition-all duration-300 ease-in-out ${
          aboutOpen || projectsOpen || specifiedProjectOpen
            ? "px-16"
            : "md:px-64 md:pr-0 px-16"
        }`}
      >
        <p className="text-2xl text-[#B2B8C2]">© 2026 Neil Dinglasa</p>
      </footer>

      <SidePanel
        title="About Me"
        open={aboutOpen}
        onClose={() => setAboutOpen(false)}
      >
        <AboutMeContent
          onViewProjects={() => {
            setProjectsOpen(true);
            setAboutOpen(false);
          }}
        />
      </SidePanel>

      <SidePanel
        title="Projects"
        open={projectsOpen}
        onClose={() => setProjectsOpen(false)}
      >
        <ProjectsContent
          projects={projects}
          handleCardClick={handleCardClick}
        />
      </SidePanel>

      <SidePanel
        title={selectedProject ? `${selectedProject.title}` : ""}
        open={specifiedProjectOpen}
        onClose={() => setSpecifiedProjectOpen(false)}
      >
        <SpecifiedProjectContent selectedProject={selectedProject} />
      </SidePanel>
    </div>
  );
}
