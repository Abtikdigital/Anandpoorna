import { useEffect, useState } from "react";
import Image1 from "../assets/Testimonial/Image1.png";

const Testimonial = () => {
  const reviewData = [
    {
      img: Image1,
      name: "Jay Gurjar",
      reviewText: "Good site! I worked with them and they’ve been amazing.",
      position: "Developer",
    },
    {
      img: Image1,
      name: "Alex Smith",
      reviewText: "Great service and smooth communication throughout!",
      position: "UI/UX Designer",
    },
    {
      img: Image1,
      name: "Riya Patel",
      reviewText: "Highly professional team with creative ideas.",
      position: "Product Manager",
    },
    {
      img: Image1,
      name: "Daniel Cruz",
      reviewText: "Exceptional support and high-quality work.",
      position: "SEO Specialist",
    },
    {
      img: Image1,
      name: "Sneha Mehta",
      reviewText:
        "One of the best web teams I’ve worked with. Quick, efficient, and creative beyond expectations.",
      position: "Content Strategist",
    },
    {
      img: Image1,
      name: "Mark Johnson",
      reviewText: "Loved the experience and the results delivered.",
      position: "Marketing Lead",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev + 1 >= Math.ceil(reviewData.length / visibleCount) ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCount, reviewData.length]);

  return (
    <div id="testimonials" className="px-4 sm:px-6 lg:px-20 py-10 ">
      <h2 className="text-center text-4xl font-semibold mb-10">
        What Our <span className="text-[#C57C2C]">Client's Say</span>
      </h2>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(100 / visibleCount) * reviewData.length}%`,
            transform: `translateX(-${
              (100 / reviewData.length) * visibleCount * currentSlide
            }%)`,
          }}
        >
          {reviewData.map((data, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              style={{ flex: `0 0 ${100 / reviewData.length}%` }}
            >
              <div className="bg-[#FFEDC8]   rounded-xl shadow-lg p-6 h-full flex flex-col justify-between animate-fade-in">
                <div className="flex-1 mb-2">
                  <p className="text-[#666] text-base italic mb-4 line-clamp-3">
                    “{data.reviewText}”
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="truncate">
                    <h3 className="font-semibold text-lg truncate">{data.name}</h3>
                    <p className="text-sm text-gray-600 truncate">
                      {data.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({
          length: Math.ceil(reviewData.length / visibleCount),
        }).map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 rounded-full transition-all cursor-pointer ${
              i === currentSlide ? "bg-[#C57C2C] w-8" : "bg-gray-400 w-3"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
