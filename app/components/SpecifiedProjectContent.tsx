"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ChevronLeft from "../assets/icons/chevron_left_icon.svg";
import ChevronRight from "../assets/icons/chevron_right_icon.svg";
import TechList from "./TechList";

interface SpecifiedProjectContentProps {
  selectedProject: {
    title: string;
    shortDescription: string;
    detailedDescription: string[];
    techStack: string[];
    githubLink?: string | null;
    figmaLink?: string | null;
    siteLink?: string | null;
    images: string[];
  } | null;
}

export default function SpecifiedProjectContent({
  selectedProject,
}: SpecifiedProjectContentProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const children = Array.from(scrollRef.current.children) as HTMLElement[];
    const total = children.length;

    let newIndex = activeIndex + (dir === "right" ? 1 : -1);
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= total) newIndex = total - 1;

    const targetChild = children[newIndex];
    if (targetChild) {
      scrollRef.current.scrollTo({
        left: targetChild.offsetLeft,
        behavior: "smooth",
      });
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (selectedProject) {
      Promise.resolve().then(() => {
        setActiveIndex(0);
        if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 });
      });
    }
  }, [selectedProject]);

  if (!selectedProject) return null;

  return (
    <>
      {selectedProject.images && selectedProject.images.length > 0 && (
        <div className="relative w-full">
          {activeIndex > 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-1 bg-[#14141E]/50 hover:cursor-pointer hover:bg-[#cc5456]"
            >
              <Image src={ChevronLeft} alt="Left" width={48} height={48} />
            </button>
          )}

          {activeIndex < selectedProject.images.length - 1 && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-1 bg-[#14141E]/50 hover:cursor-pointer hover:bg-[#cc5456]"
            >
              <Image src={ChevronRight} alt="Right" width={48} height={48} />
            </button>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
          >
            {selectedProject.images.map((img, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  className="min-w-[75%] aspect-video relative shrink-0 snap-center"
                >
                  <Image
                    src={img}
                    alt={`project-${i}`}
                    fill
                    sizes="75vw"
                    className={`object-cover transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-12 items-start">
        <h1 className="text-5xl font-medium">{selectedProject.title}</h1>
        {selectedProject.detailedDescription.map((para, i) => (
          <p key={i} className="text-3xl leading-10">
            {para}
          </p>
        ))}

        <TechList techs={selectedProject.techStack} />

        <p className="text-3xl leading-10">
          {`Check out the relevant links below to explore the project further:`}
        </p>

        <div className="flex flex-wrap gap-1">
          {selectedProject.githubLink && (
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0D0D16] hover:cursor-pointer hover:bg-[#cc5456] hover:text-white text-3xl font-bold py-4 px-8"
            >
              GitHub
            </a>
          )}
          {selectedProject.figmaLink && (
            <a
              href={selectedProject.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0D0D16] hover:cursor-pointer hover:bg-[#cc5456] hover:text-white text-3xl font-bold py-4 px-8"
            >
              Figma
            </a>
          )}
          {selectedProject.siteLink && (
            <a
              href={selectedProject.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0D0D16] hover:cursor-pointer hover:bg-[#cc5456] hover:text-white text-3xl font-bold py-4 px-8"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </>
  );
}
