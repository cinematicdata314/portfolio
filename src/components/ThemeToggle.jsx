// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react"
// import { cn } from "../lib/utils";

// export const ThemeToggle = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     // to remember if its light or dark mode before the page is refreshed (local storage)
//     useEffect(() => {
//         const storedTheme = localStorage.getItem("theme")
//         if (storedTheme === "dark") {
//             setIsDarkMode(true)
//             document.documentElement.classList.add("dark")
//         } else {
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         }
//     }, [])

//     // making the light and dark mode
//     const toggleTheme = () => {
//         if (isDarkMode) {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             setIsDarkMode(false);
//         } else {
//             document.documentElement.classList.add("dark")
//             localStorage.setItem("theme", "dark");
//             setIsDarkMode(true);
//         }
//     }

//     // making the light and dark mode buttons function
//     return (
//         <button onClick={toggleTheme}
//             className={cn(
//                 // format for where the button is located in the screen
//                 "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//                 "focus:outlin-hidden"
//             )}
//         >
//             {isDarkMode ? (
//                 <Sun className="h-6 w-6 text-yellow-300" />
//             ) : (
//                 <Moon className="h-6 w-6 text-blue-900" />
//             )}
//         </button>
//     );
// };

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  // Fix: Initialize based on localStorage OR DOM
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    // fallback if localStorage empty — check DOM
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
