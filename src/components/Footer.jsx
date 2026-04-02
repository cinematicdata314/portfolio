import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-card border-t border-border mt-12 pt-8">
      {/* Centered Text */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NR
        </p>
      </div>

      {/* Right-aligned Home Button (absolute) */}
      <a
        href="#hero"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
