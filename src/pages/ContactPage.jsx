import Image1 from "../assets/OurProjects/Image1.png";
import Mainlayout from "../Section/Mainlayout";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Mainlayout>
    <div div className="px-4 sm:px-6 lg:px-20 py-6 sm:py-8 lg:py-10">
      <div className="text-center">
        <h2 className=" text-5xl font-semibold">
          Contact <span className="text-[#C57C2C]">Us </span>
        </h2>
        <p className="text-[#8A8A8A] text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          laboriosam?
        </p>
      </div>
      <ContactForm/>
    </div>
    </Mainlayout>
  );
};

export default ContactPage;
