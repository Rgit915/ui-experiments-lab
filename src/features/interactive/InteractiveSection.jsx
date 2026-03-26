import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import AnimatedCard from "./AnimatedCard";

const InteractiveSection = () => {
  return (
    <section
      id="interactive"
      className="scroll-mt-24 py-24 bg-gray-50 dark:bg-black transition-colors duration-500"
    >
      <Container>
        <SectionTitle
          title="Interactive UI Ideas"
          subtitle="Small interactions that bring interfaces to life."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard
            title="Quiz App UI"
            description="Hover reveal interaction with layered transitions."
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          />

          <AnimatedCard
            title="Dashboard Concept"
            description="Animated card overlay with smooth scale effects."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          />
          <AnimatedCard
            title="Spring Playground 🌸"
            description="Play with blooming flowers, bouncing eggs, twinkling stars, and a curious bunny."
            image="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa"
            to="/spring-playground"
          />
        </div>
      </Container>
    </section>

  );
};

export default InteractiveSection;
