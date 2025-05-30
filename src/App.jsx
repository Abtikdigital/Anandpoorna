import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "../src/pages/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/ProjectPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const RealEstate = lazy(() => import("./pages/RealEstate"));
const EquityInvestment = lazy(() => import("./pages/EquityInvestment"));
const ScrollToUp = lazy(() => import("./pages/ScrollToTop"));

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2700);
  // }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
