import Mainlayout from "../Section/Mainlayout";
import Image1 from "../assets/ProjectPage/image1.png";
import ContactForm from "./ContactForm";
const ProjectPage = () => {
  const ourProjectData = [
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
    <Mainlayout>
      <header className="text-center  py-20 text-4xl sm:text-5xl font-bold tracking-tight bg-[#FDF8EE]">
        Our<span className="text-[#C57C2C]"> Projects</span>
      </header>

      <div className="space-y-16 px-4 sm:px-6 lg:px-20 bg-[#FDF8EE]">
        {ourProjectData.map((section, index) => (
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
              <h3 className=" text-[#C57C2C] mb-2 text-4xl sm:text-5xl font-bold tracking-tight">
                {section.title}
              </h3>
              <p className="text-gray-700 text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    
      <ContactForm />
    </Mainlayout>
  );
};
export default ProjectPage;
