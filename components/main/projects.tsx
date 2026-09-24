import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-500 dark:to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            subtitle={project.subtitle}
            date={project.date}
            description={project.description}
            tags={project.tags}
            link={project.link}
            deployLink={"deployLink" in project ? project.deployLink : undefined}
          />
        ))}
      </div>
    </section>
  );
};
