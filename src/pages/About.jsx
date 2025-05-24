import Image1 from "../assets/AboutUsPage/Image1.png";
import Mainlayout from "../Section/Mainlayout";
import ContactForm from "./ContactForm";
import WhatWeDo from "./WhatWeDo";

const sections = [
  {
    title: "Our Vision",
    description: "We aim to revolutionize the food delivery and nutrition experience for modern consumers by providing a healthy, eco-conscious, and convenient lifestyle.",
    img: Image1,
  },
  {
    title: "Our Mission",
    description: "To serve quality, affordable, and healthy meals using locally sourced ingredients, backed by tech-driven convenience and exceptional service.",
    img: Image1,
  },
  {
    title: "Why Anandpoorna?",
    description: "Anandpoorna stands for purity, taste, and balance. Our meals are curated with traditional values and modern dietary needs in mind.",
    img: Image1,
  },
];

const About = () => {
  return (
    <Mainlayout>
      <header className="text-center text-4xl font-semibold mb-12">
        About-<span className="text-[#C57C2C]">Anandpoorna</span>
      </header>

      <div className="space-y-16 px-4 sm:px-6 lg:px-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={section.img}
              alt={section.title}
              className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#C57C2C] mb-2">
                {section.title}
              </h3>
              <p className="text-gray-700 text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
      <WhatWeDo/>
      <ContactForm/>
    </Mainlayout>
  );
};

export default About;
