
const Articlecard = ({imageSrc, title, excerpt}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={imageSrc} alt={title} className="w-full h-52 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  )
}

export default Articlecard