import { BannerVid, BannerVid2 } from "../assets";

const VideoBanner = () => {
  return (
    <div className="relative w-full h-96">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={BannerVid2} type="video/mp4" />
        {/* You can add multiple source elements for different video formats */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="md:text-10xl text-2xl font-semibold font-playfair mb-4">Trendsetting Designs </h1>
          <p className="md:text-lg tex-xs">Explore our eco-friendly and sustainable fashion options.</p>
           <button className="text-black drop-shadow-md hover:bg-gray-200 ease-in-out duration-300  max mr-auto justify-start font-montserrat py-2  px-10 border-2 border-white bg-white max-lg:mt-10 mt-10">SHOP COLLECTION</button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
