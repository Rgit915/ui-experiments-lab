import Navbar from "./components/layout/Navbar";
import Hero from "./features/hero/Hero";
import ProgressSection from "./features/progress/ProgressSection";
import InteractiveSection from "./features/interactive/InteractiveSection";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 dark:text-white bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
      <Hero />
      <ProgressSection />
      <InteractiveSection />
      <Footer/>
    </div>
  );
}

export default App;