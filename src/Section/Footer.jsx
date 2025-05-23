import { Facebook, Instagram, Twitter } from "lucide-react";
import LogoImage from "../assets/logo/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FDF8EE] text-black font-sans">
      <div className=" mx-auto px-8  py-8 md:px-20">
        {/* Logo Section */}
        <div className="mb-8">
          <img
            src={LogoImage}
            alt="Logo"
            className=""
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Description Section */}
          <div className="md:w-1/5 md:text-left">
            <h2 className="text-lg font-semibold mb-4 text-[#B97733]">About</h2>
            <p className="text-sm text-[#606060]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy a
              type specimen book.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:w-4/5 gap-8 md:gap-10">
            <div className="flex-1 md:text-left">
              <h2 className="text-lg font-semibold mb-4 text-[#B97733]">
                Social
              </h2>
              <ul className="space-y-2 text-[#606060] flex flex-row md:flex-col justify-start gap-3 md:justify-start">
                <li className="cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center group justify-center w-10 h-10 rounded-full bg-[#F5E8D3] hover:bg-[#E8D9C2] transition-colors"
                  >
                    <Twitter className="w-7 h-7 group-hover:text-[#B27332]" fill="white" />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center group justify-center w-10 h-10 rounded-full bg-[#F5E8D3] hover:bg-[#E8D9C2] transition-colors"
                  >
                    <Facebook className="w-7 h-7    group-hover:text-[#B27332] " fill="white"  />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center group justify-center w-10 h-10 rounded-full bg-[#F5E8D3] hover:bg-[#E8D9C2] transition-colors"
                  >
                    <Instagram className="w-7 h-7 group-hover:text-[#B27332]" fill="white" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:text-left">
              <h2 className="text-lg font-semibold mb-4 text-[#B97733]">
                Support
              </h2>
              <ul className="space-y-2 text-[#606060]">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    Support Chat
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:text-left">
              <h2 className="text-lg font-semibold mb-4 text-[#B97733]">
                Company
              </h2>
              <ul className="space-y-2 text-[#606060]">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 md:text-left">
              <h2 className="text-lg font-semibold mb-4 text-[#B97733]">
                Contact Us
              </h2>
              <ul className="space-y-2 text-[#606060]">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    Anandpoorna123@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    (+91) 9638689279
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:underline hover:text-[#B97733] transition-colors"
                  >
                    anandpoorna Ahmedbad chharodi iscon Ambali bopal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-[#FDF8EE] border-t border-[#D9C2A6] py-4 text-sm text-[#606060]">
        Anandpoorna © All Rights Reserved, 2025
      </div>
    </footer>
  );
};

export default Footer;