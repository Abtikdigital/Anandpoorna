import Image1 from "../assets/EquityInvestment/Image1.png";
import Mainlayout from "../Section/Mainlayout";

const EquityInvestment = () => {
  return (
    <Mainlayout>
      <header className="text-center py-20 text-4xl sm:text-5xl font-bold tracking-tight bg-[#FDF8EE]">
        <span className="text-[#C57C2C]">Equity</span> Investment
      </header>

      <div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#FDF8EE]">
        <div className="flex flex-col items-center gap-8">
          <img
            src={Image1}
            alt="Equity Investment"
            className="w-full rounded-xl shadow-lg object-cover h-80 sm:h-80 md:h-96 lg:h-[500px]"
          />
          <div className="w-full text-center space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-[#606060]">
              Our equity investment approach focuses on empowering transformative projects with strategic funding. We identify high-potential opportunities in infrastructure, technology, and sustainable development, ensuring long-term value creation. By partnering with innovative enterprises, we provide not only capital but also expertise to navigate regulatory and market challenges. Our investments prioritize sustainable growth, fostering economic resilience and positive societal impact. With a commitment to excellence, we align our resources with visionary leaders to drive meaningful change across industries, delivering measurable returns while advancing global progress.
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

export default EquityInvestment;