import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import RealEstate from "./pages/RealEstate";
import EquityInvestment from "./pages/EquityInvestment";
import ScrollToUp from "./pages/ScrollToTop";
import Loader from "../src/pages/Loader";
import { useEffect, useState } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2700);
  }, []);

  if(isLoading){
    return <Loader/>
  }
  return (
    <BrowserRouter>
      <ScrollToUp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/real-estate" element={<RealEstate />} />
        <Route
          path="/services/equity-investment"
          element={<EquityInvestment />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
