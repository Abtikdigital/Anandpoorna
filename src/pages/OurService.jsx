import Image1 from "../assets/OurService/Imgae1.png"; // Note: Typo in "Imgae1.png" (should be "Image1.png")

const OurServices = () => {
  const ourServicesData = [
    {
      title: "Short Title",
      description: "Lorem ipsum dolor sit amet consectetur.",
      img: Image1,
    },
    {
      title: "A Very Long Service Title That Might Wrap",
      description: "Lorem ipsum dolor sit amet consectetur.",
      img: Image1,
    },
    {
      title: "Medium Length Title",
      description: "Lorem ipsum dolor sit amet consectetur.",
      img: Image1,
    },
    {
      title: "Another Long Title for Testing Consistency",
      description: "Lorem ipsum dolor sit amet consectetur.",
      img: Image1,
    },
    {
      title: "Short",
      description: "Lorem ipsum dolor sit amet consectetur.",
      img: Image1,
    },
    {
      title: "Title Example",
      description: "Lorem ipsum dolor sit amet consectetur.",
      img: Image1,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10">
      <div className="text-center">
        <h2 className="text-5xl font-semibold">
          Our <span className="text-[#C57C2C]">Services</span>
        </h2>
        <p className="text-[#8A8A8A] text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, laboriosam?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {ourServicesData.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-4 relative flex flex-col"
          >
            <div className="flex-shrink-0">
              <img src={data.img} alt={data.title} className="w-full h-auto" />
            </div>
            <div className="flex-grow">
              <h2
                className="font-semibold text-xl min-h-[3rem] flex items-center
                overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {data.title}
              </h2>
              <p className="text-lg text-[#8A8A8A]">{data.description}</p>
            </div>
            <div className="flex justify-center items-center h-5">
              <button
                className="w-fit absolute -bottom-[12px] px-6 cursor-pointer py-1 text-white
                bg-[#C57C2C] text-lg font-semibold hover:bg-[#A6641E] rounded-full
                border border-[#C57C2C] text-center transition-all duration-300 shadow-sm"
              >
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;