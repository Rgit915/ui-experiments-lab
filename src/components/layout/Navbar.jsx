import Container from "./Container";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <Container>
        <div className="flex justify-between items-center h-16">
          <h1 className="font-bold text-lg tracking-tight">
            <a href="/" className="hover:text-slate-600 transition">
            UI Experiments Lab
            </a>
          </h1>

          <div className="space-x-6 text-sm font-medium">
            <a href="#progress" className="hover:text-slate-600 transition">
              Progress
            </a>
            <a href="#interactive" className="hover:text-slate-600 transition">
              Interactive
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 text-sm border rounded-md transition hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;