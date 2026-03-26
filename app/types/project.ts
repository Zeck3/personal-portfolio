export type Project = {
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  techStack: string[];
  githubLink?: string | null;
  figmaLink?: string | null;
  siteLink?: string | null;
  images: string[];
};