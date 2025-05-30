import Navbar from "./Navbar";
import Footer from "./Footer";

const Mainlayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
export default Mainlayout;
