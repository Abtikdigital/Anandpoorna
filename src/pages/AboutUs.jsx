import Image1 from "../assets/About/Image1.png";
import Image2 from "../assets/About/Image2.png";
import Image3 from "../assets/About/Image3.png";

const AboutUs = () => {
  const aboutUsData = [
    {
      img: Image1,
      title: "Our Mission",
      description: `Lorem Ipsum is simply dummy text of the printing.`,
    },
    {
      img: Image2,
      title: "Our Vision",
      description: `Lorem Ipsum is simply dummy text of the printing.`,
    },
    {
      img: Image3,
      title: "Our Company",
      description: `Lorem Ipsum is simply dummy text of the printing.`,
    },
  ];

  return (
    <div className="flex flex-col px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10 bg-[#FDF8EE]">
      <h2 className="text-[#C57C2C] text-3xl md:text-5xl font-semibold text-center mb-10">
        About Us
      </h2>

      {/* flex-wrap on small, nowrap on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {aboutUsData.map((data, index) => (
          <div
            key={index}
            className="group relative cursor-pointer  rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={data.img}
              alt={data.title}
              className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-[#C57C2C] text-white px-4 py-4 z-10 transition-all duration-500 group-hover:translate-y-full">
              <h3 className="text-sm font-semibold truncate">{data.title}</h3>
              <p className="text-xs overflow-hidden whitespace-nowrap text-ellipsis">
                {data.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-[#C57C2C]/60 text-white flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-bold mb-2">{data.title}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
