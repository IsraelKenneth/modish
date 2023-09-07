import { Nav } from "../components"

const Hero = () => {
  return (
    <div className="bg-herobg bg-cover bg-center h-screen text-white">
   <div className=" flex flex-col w-full justify-center">
    <Nav />
    <div className="flex flex-col mx-auto max-md:ml-10 justify-center md:mt-[8rem] mt-[5rem] text-black">
    <h1 className="font-playfair md:text-10xl text-4xl tracking-widest font-semibold">TRUE <br /> CLASSICS.</h1>
    <button className="drop-shadow-md hover:bg-gray-200 ease-in-out duration-300  max mr-auto justify-start font-montserrat py-2  px-10 border-2 border-white bg-white max-lg:mt-10">SHOP COLLECTION</button>
    </div>
   </div>
    
    </div>
  )
}

export default Hero