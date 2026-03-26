import { useEffect, useState } from "react";

export default function useTheme() {
  // 1️⃣ Initialize theme from localStorage (lazy initialization)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  // 2️⃣ Run side effects when theme changes
  useEffect(() => {
    // Add/remove dark class on <html>
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3️⃣ Toggle function
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };

  return { theme, toggleTheme };
}