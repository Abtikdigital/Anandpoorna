import Image1 from "../assets/RealEstate/Image1.png";
import Mainlayout from "../Section/Mainlayout";

const RealEstate = () => {
  return (
    <Mainlayout>
      <header className="text-center py-20 text-4xl sm:text-5xl font-bold tracking-tight bg-[#FDF8EE]">
        <span className="text-[#C57C2C]">Real</span> Estate
      </header>

      <div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#FDF8EE]">
        <div className="flex flex-col items-center gap-8">
          <img
            src={Image1}
            alt="Real Estate"
            className="w-full rounded-xl shadow-lg object-cover h-80 sm:h-80 md:h-96 lg:h-[500px]"
          />
          <div className="w-full text-center space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-[#606060]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              interdum, arcu eu maximus semper, sem risus euismod est, ut rutrum
              augue lorem non erat. Quisque venenatis lacus id arcu volutpat
              interdum ut ac orci. Cras condimentum ut leo vitae ultrices.
              Curabitur non vulputate dui, sed consequat massa. Donec nec faucibus
              mauris. Sed finibus sed elit in faucibus. Phasellus tristique elit
              vel enim ornare, non tincidunt lectus ornare. Sed finibus, enim a
              semper vehicula, libero felis commodo quam, vel venenatis augue
              purus vel turpis. Donec malesuada pulvinar odio, eget malesuada erat
              consectetur et. Pellentesque eget neque eu purus feugiat porta. Nunc
              vitae odio accumsan, mattis nisi a, ornare urna. Fusce maximus,
              risus et tincidunt dictum, lectus arcu sodales diam, nec varius nisi
              erat in tortor.
            </p>
            <div className="flex justify-center">
              <button className="rounded-full bg-[#C57C2C] text-white px-6 py-2 text-base cursor-pointer font-semibold hover:bg-[#A6641E] transition-all duration-300 shadow-md">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
};

export default RealEstate;