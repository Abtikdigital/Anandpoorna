import Image1 from "../assets/OurService/Imgae1.png";
const OurServices = () => {
  const ourServicesData = [
    {
      title: "Lorem hello 123 dnj",
      description: "Lorem hello 123 dnj",
      img: Image1,
    },
    {
      title: "Lorem hello 123 dnj",
      description: "Lorem hello 123 dnj",
      img: Image1,
    },
    {
      title: "Lorem hello 123 dnj",
      description: "Lorem hello 123 dnj",
      img: Image1,
    },
    {
      title: "Lorem hello 123 dnj",
      description: "Lorem hello 123 dnj",
      img: Image1,
    },
    {
      title: "Lorem hello 123 dnj",
      description: "Lorem hello 123 dnj",
      img: Image1,
    },
    {
      title: "Lorem hello 123 dnj",
      description: "Lorem hello 123 dnj",
      img: Image1,
    },
  ];
  return (
    <div div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10">
      <div className="text-center">
        <h2 className=" text-5xl font-semibold">
          Our <span className="text-[#C57C2C]">Services </span>
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          laboriosam?
        </p>
      </div>

      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 col-auto gap-6 justify-center items-center">
        {ourServicesData.map((data) => (
          <div className=" bg-white shadow-xl rounded-2xl p-4 relative">
            <div>
              <img src={data.img} />
            </div>
            <div>
              <h2 className="font-semibold text-xl">{data.title}</h2>
              <p className="text-sm">{data.description}</p>
            </div>
            <div className=" flex justify-center items-center h-5">
              <button className="w-fit absolute -bottom-[12px] px-6 cursor-pointer py-1 text-white bg-[#C57C2C] text-lg font-semibold hover:bg-[#A6641E] rounded-full border border-[#C57C2C] text-center transition-all duration-300 shadow-sm">
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
