import ProjectDevelopmentImage from "../assets/Service/online-test.png";
import ExamImage from "../assets/Service/exam.png";
import CertificateImage from "../assets/Service/certification.png";

const Service = () => {
  const servicesDetails = [
    {
      img: ProjectDevelopmentImage,
      title: "Project Development",
      description: `De-risking projects through expert equity investments.`,
    },
    {
      img: ExamImage,
      title: "Co-Development",
      description: `Addressing regulatory and technical feasibility challenges.`,
    },
    {
      img: CertificateImage,
      title: "Equity Investments",
      description: `Global Infrastructure Solutions that place humanity above commerce.`,
    },
  ];

  return (
    <div className="px-4 md:px-20 py-10 bg-[#FDF8EE]">
      <div className="bg-[#C57C2C] rounded-lg text-white flex flex-wrap lg:flex-nowrap">
        {servicesDetails.map((service, index) => {
          const isLastItem = index === servicesDetails.length - 1;

          return (
            <div
              key={index}
              className={`flex gap-4 items-start w-full md:w-1/2 lg:w-1/3 p-6 
                border-b md:border-b-0 
                ${!isLastItem ? '' : ''}`}
            >
              <div className="bg-white/20 rounded-2xl flex justify-center items-center p-4 h-20 w-20 shrink-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-xl mb-1" style={{fontFamily:"Roboto Slab"}}>{service.title}</h2>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
