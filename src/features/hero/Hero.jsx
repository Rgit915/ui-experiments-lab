import Container from "../../components/layout/Container";

const Hero = () => {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 transition-colors duration-500">
      <Container>
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          UI Experiments Lab
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Progress over perfection. Motion over static.
          A growing collection of interactive UI ideas and micro-interactions.
        </p>

        <a
          href="#interactive"
          className="inline-block px-6 py-3 bg-black text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-white dark:text-black"
        >
          View Experiments
        </a>
      </Container>
    </section>
  );
};

export default Hero;