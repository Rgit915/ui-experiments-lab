import { useNavigate } from "react-router-dom";

const AnimatedCard = ({ title, description, image, to }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white dark:bg-gray-900">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-6">
        <div className="translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200 text-sm mb-4">{description}</p>

          <button
            onClick={() => to && navigate(to)}
            className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;