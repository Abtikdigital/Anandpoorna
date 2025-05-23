import Image1 from "../assets/About/Image1.png";
import Image2 from "../assets/About/Image2.png";
import Image3 from "../assets/About/Image3.png";

const AboutUs = () => {
  const aboutUsData = [
    {
      img: Image1,
      title: "Our Mission",
      description: `Lorem Ipsum is simply dummy
text of the printing.`,
    },
    {
      img: Image2,
      title: "Our Vision",
      description: `Lorem Ipsum is simply dummy
text of the printing.
      `,
    },
    {
      img: Image3,
      title: "Our Company",
      description: `Lorem Ipsum is simply dummy
text of the printing.
      `,
    },
  ];
  return (
    <div className="bg-[#FDF8EE]">
      <h2 className="text-[#C57C2C] text-2xl sm:text-3xl  md:text-5xl lg:text-5xl font-semibold text-center">
        About US
      </h2>
      <div className="flex justify-evenly">
        {aboutUsData.map((data) => (
          <div className="w-1/4">
            <img src={data.img} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutUs;
