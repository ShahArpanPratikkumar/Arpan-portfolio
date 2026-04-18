"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    root.classList.remove("light");
  } else {
    root.classList.add("light");
    root.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // We assume html comes down as 'dark' from the server (layout.tsx)
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Check local storage
    const saved = localStorage.getItem("theme") as Theme | null;
    let initial: Theme = "dark"; // default

    if (saved) {
      initial = saved === "light" ? "light" : "dark";
    } else {
      // 2. Fall back to system preference
      const sysPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (sysPrefersLight) initial = "light";
    }

    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // Prevent flash by hiding layout until mounted if theme might be light
  // (Alternatively, standard next.js way handles it via a pre-hydration script, but this works for pure client transitions)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={mounted ? "opacity-100 transition-opacity duration-500" : "opacity-0"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
