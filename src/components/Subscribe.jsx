
const Subscribe = () => {
  return (
    <div className="flex w-full padding-x">
<div className=" p-6 mx-auto">
  <h1 className="font-playfair font-semibold md:text-10xl text-2xl text-gray-200 md:mb-10 MD:mb-4 MB-2">SUBSCRIBE</h1>
  <p className="text-gray-600 mb-6">Stay up-to-date with the latest fashion trends and exclusive offers. Subscribe now!</p>
  <form>
    <div className="flex flex-col sm:flex-row">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-2/3 px-4 py-2 border border-black font-montserrat  mb-2 sm:mb-0 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="w-full sm:w-1/3 bg-black  text-white py-2 transition duration-300 ease-in-out"
      >
        Subscribe
      </button>
    </div>
  </form>
</div>
</div>


  )
}

export default Subscribe