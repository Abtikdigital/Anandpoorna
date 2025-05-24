import BackgroundImage from "../assets/ContactForm/backGroundImage.jpeg";
import LeftSectionImage from "../assets/ContactForm/leftSectionImage.png"
const ContactForm = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10">
      <div
        style={{ backgroundImage: `url(${BackgroundImage})`,backgroundSize:"100% 100%" }}
        className=" bg-no-repeat bg-center rounded-xl shadow-lg p-6 sm:p-10 lg:p-12"
      >
        <h2 className="text-center text-4xl text-white font-semibold mb-10">
          Join <span className="text-[#FFEDC8]">With Us</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image section */}
          <div className="hidden lg:flex justify-center items-center h-96  shadow-2xl rounded-xl overflow-hidden bg-[#D9D9D9] ">
            <img
              src={LeftSectionImage}
              alt="Contact"
              className=" object-fill"
            />
          </div>

          {/* Form section */}
          <form className="flex flex-col gap-4" onSubmit={(e)=>{e.preventDefault()}}>
            <input
              placeholder="Enter Your Name"
              type="text"
              className="bg-[#FFEDC8] px-4 border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
            />
            <input
              placeholder="Enter Your Email"
              type="email"
              className="bg-[#FFEDC8] px-4 border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
            />
            <input
              placeholder="Enter Your Number"
              type="tel"
              className="bg-[#FFEDC8] px-4 border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
            />
            <textarea
              placeholder="Enter Your Message"
              rows={5}
              className="bg-[#FFEDC8] px-4 resize-none border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
            ></textarea>
            <button
              type="submit"
              className="bg-[#FFEDC8] rounded-xl w-full lg:w-fit cursor-pointer text-[#707070] font-semibold px-6 py-2 hover:bg-[#f5d99e] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
