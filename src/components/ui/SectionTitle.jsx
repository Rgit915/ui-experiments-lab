const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;