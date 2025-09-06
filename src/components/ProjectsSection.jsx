import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Traveling Salesman Solver",
    description:
      "TSP from a city CSV which builds a Euclidean matrix, solves via DFS (small N) or nearest-neighbor (large N), then reports the tour and total length.",
    image: "/projects/tsp.png",
    tags: ["Python", "Pandas", "Algorithms"],
    demoUrl:
      "https://github.com/ProgrammingGreek2002/ResumeProjects/blob/main/Traveling%20Salesman%20Solver.py",
  },
  {
    id: 2,
    title: "K-Means Clustering from Scratch ",
    description:
      "A simple Python script that clusters city latitude/longitude data into two groups using K-Means and visualizes the results.",
    image: "/projects/kmeans.PNG",
    tags: ["Python", "Machine Learning"],
    demoUrl:
      "https://github.com/ProgrammingGreek2002/ResumeProjects/blob/main/K-Means%20Clustering%20from%20Scratch.py",
  },
  {
    id: 3,
    title: "COVID-19 Vaccination Impact Analysis",
    description:
      "Analyzes Ontario COVID-19 outcomes vs. the vaccine rollout using public data; cleans and visualizes cases/ICU/deaths with pandas & matplotlib.",
    image: "/projects/covid.PNG",
    tags: ["Python", "Matplotlib", "Data Visualization"],
    demoUrl:
      "https://github.com/ProgrammingGreek2002/ResumeProjects/blob/main/COVID-19%20Vaccination%20Impact%20Analysis.ipynb",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container" mx-auto max-w-5xl>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects capture my learning journey as a student, where I
          explored new concepts, practiced different technologies, and grew my
          skills by bringing ideas into reality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-forground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ProgrammingGreek2002"
          >
            Check Out My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
