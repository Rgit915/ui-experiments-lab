import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <Container>
        <div className="flex justify-between items-center h-16">
          <h1 className="font-bold text-lg tracking-tight">
            UI Experiments Lab
          </h1>

          <div className="space-x-6 text-sm font-medium">
            <a href="#progress" className="hover:text-blue-600 transition">
              Progress
            </a>
            <a href="#interactive" className="hover:text-blue-600 transition">
              Interactive
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;