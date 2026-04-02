import { Github, Linkedin, Mail, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I appreciate you taking the time to explore my portfolio! Let’s
          connect to chat about opportunities, share ideas, or collaborate on
          exciting projects.
        </p>
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <div className="gradient-border max-w-md w-full px-8 py-4 card-hover">
              {/* email section */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:r.ninam21@gmail.com"
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    r.ninam007@gmail.com
                  </a>
                </div>
              </div>
            </div>
            {/* logos */}
            <div className="pt-2">
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/ninam-r-15475336a/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/cinematicdata314"
                  target="_blank"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
          {/* message section */}
        </div>
      </div>
    </section>
  );
};
