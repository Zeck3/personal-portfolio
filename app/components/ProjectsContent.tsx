"use client";

import { Project } from "../types/project";
import ProjectCard from "./ProjectCards";

interface ProjectsContentProps {
  projects: Project[];
  handleCardClick: (project: Project) => void;
}

export default function ProjectsContent({
  projects,
  handleCardClick,
}: ProjectsContentProps) {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.shortDescription}
          techStack={project.techStack}
          githubLink={project.githubLink}
          figmaLink={project.figmaLink}
          siteLink={project.siteLink}
          image={project.images[0] ?? null}
          onClick={() => handleCardClick(project)}
        />
      ))}

      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`Projects are coming soon! In the meantime, you can check out my GitHub for more of my work: `}
      </p>
      <a
        href={"https://github.com/Zeck3"}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#F8F8F8] text-[#08080C] hover:cursor-pointer hover:bg-[#E05D5D] hover:text-[#F8F8F8] text-3xl font-bold py-4 px-8"
      >
        {`Visit Neil's GitHub`}
      </a>
    </>
  );
}
