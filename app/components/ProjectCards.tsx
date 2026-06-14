"use client";

import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string | null;
  figmaLink?: string | null;
  siteLink?: string | null;
  image?: string | null;
  onClick?: () => void;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  onClick,
  image,
}: CardProps) {
  const MAX_VISIBLE = 5;
  const showAllIfFew = 6;

  const techToShow =
    techStack.length <= showAllIfFew
      ? techStack
      : techStack.slice(0, MAX_VISIBLE);

  const remaining =
    techStack.length > showAllIfFew ? techStack.length - MAX_VISIBLE : 0;

  return (
    <button
      className="group flex flex-none flex-col text-left 2xl:flex-row justify-center 2xl:items-center w-full overflow-hidden transition-shadow duration-300 hover:bg-[#0D0D11] hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video 2xl:h-64 flex flex-col justify-between p-4 bg-[#0d0d11] overflow-hidden">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 z-1"
            sizes="(max-width: 768px) 100vw, 
             (max-width: 1280px) 50vw, 
             33vw"
            priority
          />
        )}

      </div>

      <div className="flex-1 p-0 py-8 2xl:px-8 2xl:py-4 gap-4 flex flex-col justify-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-2xl leading-10">{description}</p>
        </div>

        <div className="flex flex-wrap overflow-hidden gap-1">
          {techToShow.map((tech) => (
            <span
              key={tech}
              className="bg-[#0d0d11] text-[#F8F8F8] text-sm font-bold p-2"
            >
              {tech}
            </span>
          ))}

          {remaining > 0 && (
            <span className="bg-[#0d0d11] text-[#F8F8F8] text-sm font-bold py-2 px-4">
              +{remaining} more
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
