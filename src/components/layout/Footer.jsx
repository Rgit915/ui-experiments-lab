import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <Container>
        <div className="py-16 text-center">

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 tracking-tight">
            UI Experiments Lab
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Small interactions. Real growth.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-10 text-sm font-medium">

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-all duration-300"
            >
              GitHub
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#"
              className="relative group transition-all duration-300"
            >
              LinkedIn
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#"
              className="relative group transition-all duration-300"
            >
              Portfolio
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>

          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-300 dark:bg-gray-800 mb-6"></div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} Rora Alem — Built with React & Tailwind
          </p>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;