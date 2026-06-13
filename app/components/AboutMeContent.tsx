import TechList from "./TechList";

type AboutMeContentProps = {
  onViewProjects: () => void;
};

export default function AboutMeContent({
  onViewProjects,
}: AboutMeContentProps) {
  return (
    <>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`Detail-oriented UI/UX Designer experienced in designing web and mobile 
        applications through wireframing, prototyping, user flows, and front-end 
        implementation across 10+ academic and personal projects. Skilled in 
        translating complex requirements into intuitive, user-centered interfaces 
        while leveraging front-end development skills to bridge design and implementation. `}
      </p>
      <button
        className="bg-[#F8F8F8] text-[#0D0D16] hover:cursor-pointer hover:bg-[#E05D5D] hover:text-[#F8F8F8] text-3xl font-bold py-4 px-8"
        onClick={onViewProjects}
      >
        {`View Projects`}
      </button>
      <h1 className="text-5xl mt-24">Contacts</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`You can reach me through the following:`}
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-[25%_75%] gap-12 text-lg w-full">
        <span className="text-3xl font-bold">Mobile No.</span>
        <a className="hover:underline text-2xl sm:text-3xl">0966 668 1223</a>
        <span className="text-3xl font-bold">Email</span>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=dinglasa.neiljan234@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-2xl sm:text-3xl"
        >
          dinglasa.neiljan234@gmail.com
        </a>
        <span className="text-3xl font-bold">GitHub</span>
        <a
          href="https://github.com/Zeck3"
          target="_blank"
          className="hover:underline text-2xl sm:text-3xl"
        >
          github.com/Zeck3
        </a>
        <span className="text-3xl font-bold">LinkedIn</span>
        <a
          href="https://www.linkedin.com/in/zeck234"
          target="_blank"
          className="hover:underline text-2xl sm:text-3xl"
        >
          linkedin.com/in/zeck234
        </a>
      </div>
      <h1 className="text-5xl mt-24">What I do</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`I do full-stack development, with a focus on front-end development and
          UI/UX design. I have experience working with a variety of development
          tools and technologies.`}
      </p>
      <h1 className="text-5xl mt-24">Front-End Development</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`For front-end development, I have experience translating designs from
          wireframes and prototypes into code, ensuring that the interface is
          responsive, user-friendly, and aligned to the source material. I also
          maintain a consistently organized codebase across directories. `}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`I have worked on interfaces with heavy data processing, such as 
          displaying class record tables, optimizing performance to prevent lag, 
          and ensuring responsiveness when interacting with APIs. Additionally,
          I have experience integrating a free map API to mobile app for campus
          navigation.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`Here are the tools and technologies I've used for front-end development:`}
      </p>
      <TechList
        techs={[
          "React.js",
          "React Native Expo",
          "TypeScript",
          "JavaScript",
          "TailwindCSS",
          "CSS3",
          "HTML5",
        ]}
      />
      <h1 className="text-5xl mt-24">Back-End Development</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`For back-end development, I have experience translating tables from an
          entity-relationship diagram into models for the database. I also have
          experience managing data by designing and implementing RESTful APIs to
          serve the front-end, handling data serialization and business logic.
          Like on the front-end, I organize the codebase consistently across 
          directories. Additionally, I optimize queries to reduce response 
          times, using techniques such as prefetching.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`Here are the tools and technologies I've used for back-end development:`}
      </p>
      <TechList techs={["Django", "Python"]} />
      <h1 className="text-5xl mt-24">Database</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`For database, I have experience with database initialization and
          query operations, although not in depth. I have primarily worked with
          PostgreSQL through the Django ORM (with use of Python). Additionally, I 
          have experience with Machine Learning (ML), covered model training,
          and data analysis.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`Here are the databases or data stores I've used:`}
      </p>
      <TechList techs={["MySQL", "PostgreSQL", "SQLite", "JSON"]} />
      <h1 className="text-5xl mt-24">Deployment</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`For deployment, I have experience uploading my projects on the web,
          mainly setting up GitHub projects for deployment and a few
          configurations to make sure it works.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`Here are the cloud-based PaaS I've used for deployment:`}
      </p>
      <TechList techs={["Railway", "Netlify", "Github Pages"]} />
      <h1 className="text-5xl mt-24">Design Tools</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`For designing, I first consider the context by conducting research,
          understanding the business perspective, and knowing the product I
          am building and the problem it is intended to solve. I also draw
          references from existing interfaces or systems to develop design
          solutions that are suitable for the project. I primarily use Figma and
          FigJam to create wireframes, prototypes, graphic and marketing 
          materials, diagrams, and flowcharts.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">{`Here are the design tools I've used:`}</p>
      <TechList techs={["Figma", "FigJam"]} />
      <h1 className="text-5xl mt-24">Other Development Tools</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`For other development tools, my workflow primarily includes GitHub and
          VSCode. I also leverage AI tools for ideation, research, development,
          and design. Additionally, I use tools for Quality Assurance (QA), such as
          Postman and browser DevTools.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">{`Here are the other development tools I've used:`}</p>
      <TechList
        techs={[
          "Git",
          "GitHub",
          "VSCode",
          "Docker",
          "ChatGPT",
          "Copilot",
          "DevTools",
        ]}
      />
      <h1 className="text-5xl mt-24">How I work</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`I use AI tools throughout development and design—from ideation to
          production—but I treat their output as a perspective. I take it with a
          grain of salt and refine it into something better. I don't just
          "vibe-code" (if you can call it vibe-coding); I make sure I understand 
          what I'm building, question every step, and follow my curiosity to 
          create something that actually delivers. I tend to question ChatGPT's
          suggestions to explore different implementation approaches and see 
          how things could be done better.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`As a detail-oriented person, I take a structured, step-by-step
          approach, starting with research to understand the brand, purpose, and
          problem the product is meant to solve. I emphasize organization, clean
          codebases, and consistent design systems, keeping track of all
          requirements and tasks while aiming to follow schedules closely. I
          also focus on the creative side, designing not just for visual appeal
          but for functionality and problem-solving, using research, references,
          and clear intent behind every decision. For me, good design takes
          time; it requires iteration, testing, and refinement to reach that
          level of quality and user satisfaction. Still, it shouldn't ultimately
          be perfect.`}
      </p>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`I work closely with my colleagues (friends) on our capstone project,
          as well as on other coursework that requires teamwork, collaborating
          to complete tasks effectively. I take the time to listen carefully to
          criticism and feedback, and I also provide constructive feedback in
          return—often taking the lead in reviewing others' work. At times, 
          disagreements may arise due to differing preferences or simple 
          misunderstandings. This makes it important to consider multiple 
          perspectives in order to reach a resolution. I have also taken 
          the initiative to organize and assign tasks to ensure that our 
          capstone project is completed.`}
      </p>
      <h1 className="text-5xl mt-24">What I Aim For</h1>
      <p className="text-3xl leading-14 text-[#B2B8C2]">
        {`I look forward to improving my skills and expanding on what I have
          already learned, while adapting to the evolving environment. I aim to
          gain real industry experience, collaborate with talented people, and
          contribute to ideas that deliver impact. I hope to leave a mark on the
          world through work that I can be proud of.`}
      </p>
      <button
        className="bg-[#F8F8F8] text-[#0D0D16] hover:cursor-pointer hover:bg-[#E05D5D] hover:text-[#F8F8F8] text-3xl font-bold py-4 px-8"
        onClick={onViewProjects}
      >
        {`View Projects`}
      </button>
    </>
  );
}
