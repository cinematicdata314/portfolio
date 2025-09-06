// import { ArrowUp } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
//       <p className="container mx-auto max-w-5xl relative flex items-center justify-center">
//         &copy; {new Date().getFullYear()} Yourmom.co
//       </p>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };

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
