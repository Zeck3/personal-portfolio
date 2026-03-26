"use client";

import { useState } from "react";
import SidePanel from "./components/SidePanel";
import projects from "./data/projects.json";
import AboutMeContent from "./components/AboutMeContent";
import SpecifiedProjectContent from "./components/SpecifiedProjectContent";
import { Project } from "./types/project";
import ProjectsContent from "./components/ProjectsContent";

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
    <div className="flex flex-col h-screen bg-[#0D0D16] text-white">
      <header
        className={`h-48 flex flex-col justify-end transition-all duration-300 ease-in-out
    ${aboutOpen || projectsOpen || specifiedProjectOpen ? "px-16" : "md:px-64 md:pr-0 px-16"}`}
      >
        <button
          className="flex flex-col items-start w-xs hover:cursor-pointer hover:bg-[#cc5456]"
          onClick={() => {
            setAboutOpen(false);
            setProjectsOpen(false);
            setSpecifiedProjectOpen(false);
          }}
        >
          <h1 className="text-5xl font-medium">Neil Dinglasa</h1>
          <h2 className="text-3xl">Developer & Designer</h2>
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
            className={`text-3xl text-left w-xs hover:cursor-pointer hover:bg-[#cc5456] ${
              aboutOpen ? "bg-[#cc5456]" : ""
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
            className={`text-3xl text-left w-xs hover:cursor-pointer hover:bg-[#cc5456] ${
              projectsOpen ? "bg-[#cc5456]" : ""
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

      <footer
        className={`h-32 lg:h-48 flex flex-col justify-center bg-[#14141E] transition-all duration-300 ease-in-out ${
          aboutOpen || projectsOpen || specifiedProjectOpen
            ? "px-16"
            : "md:px-64 md:pr-0 px-16"
        }`}
      >
        <p className="text-2xl">© 2026 Neil Dinglasa</p>
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
