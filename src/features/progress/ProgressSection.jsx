import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const ProgressSection = () => {
  return (
    <section id="progress" className="scroll-mt-24 py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <Container>
        <SectionTitle
          title="Progress Over Perfection"
          subtitle="Documenting growth, iteration, and refinement."
        />

        <div className="text-center text-gray-500">
          Progress experiments coming soon...
        </div>
      </Container>
    </section>
  );
};

export default ProgressSection;