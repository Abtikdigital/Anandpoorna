import Mainlayout from "../Section/Mainlayout";
import Hero from "./Hero";
import Service from "./Service";
import AboutUs from "../pages/AboutUs"
import OurServices from "./OurService";
import OurProject from "./OurProjects";
import Testimonial from "./Testimonial";
import ContactForm from "./ContactForm";
const Home = () => {
  return (
    <Mainlayout>
      <Hero />
      <Service/>
      <AboutUs/>
      <OurServices/>
      <OurProject/>
      <Testimonial/>
      <ContactForm/>
    </Mainlayout>
  );
};
export default Home;
