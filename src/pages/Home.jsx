import Mainlayout from "../Section/Mainlayout";
import Hero from "./Hero";
import Service from "./Service";
import AboutUs from "../pages/AboutUs"
import OurServices from "./OurService";
import OurProject from "./OurProjects";
import Testimonial from "./Testimonial";
const Home = () => {
  return (
    <Mainlayout>
      <Hero />
      <Service/>
      <AboutUs/>
      <OurServices/>
      <OurProject/>
      <Testimonial/>
    </Mainlayout>
  );
};
export default Home;
