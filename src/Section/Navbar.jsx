import { NavLink, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LogoImage from "../assets/logo/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const linkData = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    {
      title: "Services",
      path: "",
      subServices: [
        { title: "Real Estate", path: "/services/real-estate" },
        { title: "Equity Investment", path: "/services/equity-investment" },
       
      ],
    },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (<>
    <nav className="sticky top-0 px-4 lg:px-20 z-50 bg-gradient-to-r from-[#FDF8EE] to-[#FFF4E3] shadow-lg rounded-lg md:border-none font-sans">
      <div className=" ">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={LogoImage} alt="Logo" className="h-12 w-auto drop-shadow-md" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {linkData.map((data) => (
              <div
                key={data.title}
                className="group relative flex flex-col"
                onMouseEnter={data.subServices ? handleMouseEnter : undefined}
                onMouseLeave={data.subServices ? handleMouseLeave : undefined}
              >
                <NavLink
                  to={data.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 text-black text-base font-semibold hover:text-[#A6641E] hover:bg-[#FFF4E3] rounded-md transition-all duration-300 ${
                      isActive && !data.subServices ? "text-[#A6641E] bg-[#FFF4E3]" : ""
                    }`
                  }
                  onClick={() => setIsServicesOpen(false)}
                >
                  {data.title}
                  {data.subServices &&
                    (isServicesOpen ? (
                      <ChevronUp size={16} className="text-[#A6641E]" />
                    ) : (
                      <ChevronDown size={16} className="text-[#A6641E]" />
                    ))}
                </NavLink>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full bg-transparent group-hover:bg-[#A6641E] transition-all duration-300 ${
                    data.path === window.location.pathname && !data.subServices ? "bg-[#A6641E]" : ""
                  }`}
                ></span>
                {data.subServices && isServicesOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-44 bg-[#FDF8EE] shadow-xl rounded-lg flex flex-col items-center">
                    {data.subServices.map((sub) => (
                      <NavLink
                        key={sub.title}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block w-full text-center px-4 py-2 text-black border-b-1 border-black/10 text-base font-medium hover:bg-[#FFF4E3] hover:text-[#A6641E] transition-all duration-300 ${
                            isActive ? "text-[#A6641E] bg-[#FFF4E3]" : ""
                          }`
                        }
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {sub.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/signup"
              className="rounded-full bg-[#C57C2C] text-white px-6 py-2 text-base font-semibold hover:bg-[#A6641E] transition-all duration-300 shadow-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black p-2 border border-[#C57C2C] rounded-lg hover:bg-[#C57C2C] hover:text-white transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 px-4">
              {linkData.map((data) => (
                <div key={data.title}>
                  <NavLink
                    to={data.path}
                    className={({ isActive }) =>
                      `flex justify-between items-center px-4 py-3 text-black text-lg font-semibold hover:bg-[#FFF4E3] hover:text-[#A6641E] rounded-md border border-[#C57C2C] transition-all duration-300 shadow-sm ${
                        isActive && !data.subServices ? "text-[#A6641E] bg-[#FFF4E3]" : ""
                      }`
                    }
                    onClick={() => {
                      if (data.subServices) {
                        toggleServicesMenu();
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <span>{data.title}</span>
                    {data.subServices &&
                      (isServicesOpen ? (
                        <ChevronUp size={20} className="text-[#A6641E]" />
                      ) : (
                        <ChevronDown size={20} className="text-[#A6641E]" />
                      ))}
                  </NavLink>
                  {data.subServices && isServicesOpen && (
                    <div className="mx-2 mt-3 flex flex-col gap-2 bg-[#FDF8EE] rounded-lg p-4">
                      {data.subServices.map((sub) => (
                        <NavLink
                          key={sub.title}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-black text-base font-medium hover:bg-[#FFF4E3] hover:text-[#A6641E] rounded-md border border-[#C57C2C] text-center transition-all duration-300 ${
                              isActive ? "text-[#A6641E] bg-[#FFF4E3]" : ""
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/signup"
                className="block px-4 py-3 text-white bg-[#C57C2C] text-lg font-semibold hover:bg-[#A6641E] rounded-full border border-[#C57C2C] text-center transition-all duration-300 shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
