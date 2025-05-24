import HeroImage from "../assets/Hero/HeroImage.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#FDF8EE] min-h-[400px] md:min-h-[500px]">
      <div className="w-full md:w-1/2 text-center md:text-start flex flex-col justify-center space-y-4 sm:space-y-6 mb-6 md:mb-0">
        <h2 className="text-2xl sm:text-3xl  md:text-5xl lg:text-5xl font-semibold leading-tight text-[#333] text-wrap">
          Transforming Infrastructure Financing and Development
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#606060]">
          Expertise in project lifecycle, financing, and development solutions.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center md:px-12">
        <img
          src={HeroImage}
          alt="Hero Image"
          className="w-full  h-80 sm:h-80 md:h-96 lg:h-[500px] object-contain md:object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;