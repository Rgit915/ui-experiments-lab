import { useEffect, useState } from "react";
import Container from "./Container";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <Container>
        <div className="py-16 text-center">

          <h3 className="text-2xl font-bold mb-3 tracking-tight">
            UI Experiments Lab
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Small interactions. Real growth.
          </p>

          <div className="flex justify-center gap-8 mb-10 text-sm font-medium">
            <a href="https://github.com/Rgit915" className="relative group">
              GitHub
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="https://www.linkedin.com/in/rora-alem/" className="relative group">
              LinkedIn
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="h-px w-full bg-gray-300 dark:bg-gray-800 mb-6"></div>

          <p className="text-xs text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} Rora Alem — Built with React & Tailwind
          </p>

        </div>
      </Container>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg transition-all duration-300 transform ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } hover:scale-110 hover:shadow-2xl`}
      >
        <span className="text-lg">⌃</span>
      </button>
    </footer>
  );
};

export default Footer;