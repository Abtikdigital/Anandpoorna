import Mainlayout from "../Section/Mainlayout";
import Hero from "./Hero";
import Service from "./Service";
import AboutUs from "../pages/AboutUs"
const Home = () => {
  return (
    <Mainlayout>
      <Hero />
      <Service/>
      <AboutUs/>
    </Mainlayout>
  );
};
export default Home;
