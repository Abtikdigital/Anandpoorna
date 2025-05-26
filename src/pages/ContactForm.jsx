import { useForm } from "react-hook-form";
import BackgroundImage from "../assets/ContactForm/backGroundImage.jpeg";
import LeftSectionImage from "../assets/ContactForm/leftSectionImage.png";
import { addContact } from "../apis/contactApis";
import Swal from "sweetalert2";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      let res = await addContact(formData);
      if (res?.status === 201) {
        Swal.fire({
          icon: "success",
          title:"Success",
          text: "Thank You For Contacting Us",
          draggable: true,
          confirmButtonColor: "#C57C2C",
        });
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops !",
          text: error?.response?.data?.message,
          draggable: true,
          confirmButtonColor: "#C57C2C",
        });
      }
      console.log(error);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10">
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "100% 100%",
        }}
        className="bg-no-repeat bg-center rounded-xl shadow-lg p-6 sm:p-10 lg:p-12"
      >
        <h2 className="text-center  text-white  mb-10 text-4xl sm:text-5xl font-bold tracking-tight">
          Join <span className="text-[#FFEDC8]">With Us</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="hidden lg:flex justify-center items-center h-96 shadow-2xl rounded-xl overflow-hidden bg-[#D9D9D9]">
            <img src={LeftSectionImage} alt="Contact" className="object-fill" />
          </div>

          {/* Form Section */}
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name */}
            <input
              placeholder="Enter Your Name"
              type="text"
              className="bg-[#FFEDC8] px-4 border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
              {...register("name", {
                required: "* Name is required",
              })}
            />
            {errors?.name && (
              <div className="text-red-800 font-semibold">
                {errors?.name?.message}
              </div>
            )}

            {/* Email */}
            <input
              placeholder="Enter Your Email"
              type="email"
              className="bg-[#FFEDC8] px-4 border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
              {...register("email", {
                required: "* Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "* Enter a valid email address",
                },
              })}
            />
            {errors?.email && (
              <div className="text-red-800 font-semibold">
                {errors?.email?.message}
              </div>
            )}

            {/* Number */}
            <input
              placeholder="Enter Your Number"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              className="bg-[#FFEDC8] px-4 border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
              {...register("number", {
                required: "* Number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "* Only numbers are allowed",
                },
              })}
            />

            {errors?.number && (
              <div className="text-red-800 font-semibold">
                {errors?.number?.message}
              </div>
            )}

            {/* Message */}
            <textarea
              placeholder="Enter Your Message"
              rows={5}
              className="bg-[#FFEDC8] px-4 resize-none border-none focus:outline-none w-full rounded-lg p-2.5 text-[#707070] font-semibold"
              {...register("message")}
            ></textarea>
            {errors?.message && (
              <div className="text-red-800 font-semibold">
                {errors?.message?.message}
              </div>
            )}

            {/* Submit */}
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
