import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./features/hero/Hero";
import ProgressSection from "./features/progress/ProgressSection";
import InteractiveSection from "./features/interactive/InteractiveSection";
import Footer from "./components/layout/Footer";
import SpringPlayground from "./features/interactive/SpringPlayground";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProgressSection />
                <InteractiveSection />
                <Footer />
              </>
            }
          />
          <Route path="/spring-playground" element={<SpringPlayground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
