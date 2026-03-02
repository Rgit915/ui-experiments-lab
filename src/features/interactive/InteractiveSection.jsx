import Container from "../../components/layout/Container";
import SectionTitle from "../../components/ui/SectionTitle";

const InteractiveSection = () => {
  return (
    <section id="interactive" className="scroll-mt-24 py-24 bg-gray-50 dark:bg-black transition-colors duration-500">
      <Container>
        <SectionTitle
          title="Interactive UI Ideas"
          subtitle="Small interactions that bring interfaces to life."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-md text-center">
            Interaction demo coming soon...
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InteractiveSection;