import HeroImage from "../assets/Hero/HeroImage.png";
const Hero = () => {
  return (
    <div className="flex flex-col space-y-3 md:flex-row px-4 lg:px-12 py-6 bg-[#FDF8EE]">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-3">
        <h2 className="text-4xl  font-semibold">
          Transforming  Infrastructure Financing  and Development{" "}
        </h2>
        <p className="text-xl">
          Expertise in project lifecycle, financing, and development solutions.
        </p>
      </div>
      <div className=" w-full h-96 md:w-1/2 flex justify-center ">
        <img src={HeroImage} className="h-full" />
      </div>
    </div>
  );
};
export default Hero;
