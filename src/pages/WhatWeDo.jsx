import Image1 from "../assets/OurProjects/Image1.png";

const WhatWeDo = () => {
  const whatWeData = [
    {
      img: Image1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "High-quality design and development for modern platforms.dsadsa",
    },
    {
      img: Image1,
      title: "Scalable backend solutions",
      description: "Robust, secure APIs to power your digital products.  ggdas",
    },
    {
      img: Image1,
      title: "Responsive frontend interfaces",
      description:
        "Intuitive, fast UIs built with React and Tailwind CSS.  fgfds ds",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          What <span className="text-[#C57C2C]">We</span> Do
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mt-4  mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          laboriosam?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
        {whatWeData.map((data, index) => (
          <div
            key={index}
            className="bg-white cursor-pointer shadow-lg rounded-2xl p-6 flex flex-col justify-between h-[420px] transition-transform duration-300 hover:scale-105"
          >
            <div className="flex-shrink-0 h-48">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col mt-4 h-[120px] overflow-hidden">
              <h2 className="font-semibold text-xl text-gray-800 truncate">
                {data.title}
              </h2>
              <p className="text-gray-600 text-base mt-2 line-clamp-3 overflow-hidden">
                {data.description}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="px-6 py-2 cursor-pointer text-white bg-[#C57C2C] rounded-full font-semibold text-base
                hover:bg-[#A6641E] transition-colors duration-300 border border-[#C57C2C] shadow-sm"
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

export default WhatWeDo;
