type TechListProps = {
  techs: string[];
};

export default function TechList({ techs }: TechListProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {techs.map((tech) => (
        <span
          key={tech}
          className="bg-[#0d0d11] text-[#F8F8F8] text-3xl font-bold py-4 px-8"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
