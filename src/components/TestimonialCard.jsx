
const TestimonialCard = ({ name, testimony }) => {
  return (
    <div className="max-w-xs mx-auto  shadow-sm overflow-hidden mb-10">
      <div className="px-6 py-4">
                <p className="text-gray-600 text-base">{testimony}</p>
        <div className="text-xl font-semibold text-gray-800 mt-2">{name}</div>
      </div>
    </div>
  );
};

export default TestimonialCard