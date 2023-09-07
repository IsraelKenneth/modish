import { Women, Men } from "../assets"

const Categories = () => {
  return (
    <section class=" w-full flex mx-auto py-8">
<div class="w-full ">
  <div class="mx-auto px-4 sm:px-6 lg:px-2">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* <!-- Card 1 --> */}
      <div class="flex-1 shadow-lg overflow-hidden">
        <div class="relative">
          <img
            src={Women}
            alt="Women"
            class="grayscale w-full h-auto object-contain"
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center">
                     <h1 className="text-white font-playfair md:text-8xl text-4xl tracking-widest font-semibold mb-5">WOMEN</h1>
           <button className="drop-shadow-md hover:bg-gray-200 ease-in-out duration-300  max mx-auto justify-start font-montserrat py-2  px-10 border-2 border-white bg-white max-lg:mt-10">SHOP WOMEN</button>
          </div>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div class="flex-1 shadow-lg overflow-hidden">
        <div class="relative">
          <img
            src={Men}
            alt="Men"
            class="w-full h-auto object-cover grayscale"
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center">
           <h1 className="text-white font-playfair md:text-8xl text-4xl tracking-widest font-semibold mb-5">MEN</h1>
           <button className="drop-shadow-md hover:bg-gray-200 ease-in-out duration-300  max mx-auto justify-start font-montserrat py-2  px-10 border-2 border-white bg-white max-lg:mt-10">SHOP MEN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Categories