import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* left side of the website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Graduated with a BSc in Computer Science
            </h3>
            <p className="text-muted-foreground">
              Hello! I am a recent computer science graduate girly and I value
              writing clear code, learning fast, and collaboration.
            </p>

            <p className="text-muted-foreground">
              I’ve completed several coursework projects across algorithms and
              data analysis and I’m ready to contribute to real life projects. I
              am currently looking for an internship or a early-career role
              where I can build real life products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              {/* add link to the cv */}
              <a
                href="/final_rai_resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* right side of the page */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Whether it’s building projects from scratch or improving
                    existing ones, I focus on clarity, structure, and efficency
                    on my code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Personal Growth</h4>
                  <p className="text-muted-foreground">
                    Exploring different tools, frameworks, and ideas helps me
                    grow as a developer and as a person, while keeping me
                    adaptable to new challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    Thriving in clear communication, adaptability, and a
                    proactive mindset to help teams reach their goals
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
