import { useState } from "react";
import bg from "../src/assets/bg.png";
import Dashboard from "./components/header-section/Dashboard";
import Navbar from "./components/header-section/Navbar";
import Features from "./components/body-section/Features";
import MainBody from "./components/body-section/MainBody";
import Footer from "./components/footer/Footer";
import Caurosel from "./components/caurosel/Caurosel";
import titleIcon from "../src/assets/titleIcon.svg";
import Carousel from "./components/body-section/Carousel";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <div className={!isHidden ? "mb-28" : ""}>
        <div className=" relative bg-[#4B4AEF] lg:bg-transparent flex flex-col h-[977px] lg:h-fit">
          <div
            onClick={handleClick}
            className="flex justify-between  w-full pt-1 sm:pt-0  "
          >
            <div className="flex flex-col gap-y-1 mx-4 sm:hidden  px-4 py-2 rounded-md ">
              <span className="w-7 bg-white h-1"></span>
              <span className="w-7 bg-white h-1"></span>
              <span className="w-7 bg-white h-1"></span>
            </div>
            <div className={isHidden ? "px-2 sm:hidden" : "hidden"}>
              <div className="flex items-center gap-x-2 text-white">
                <img src={titleIcon} alt="title-icon" className="w-7 h-7" />
                <h1 className="text-2xl">TeamFlow</h1>
              </div>
            </div>
          </div>
          <img src={bg} className="w-3/4" alt="bg" />
          <div className="absolute top-6  w-full">
            <div className={isHidden ? "hidden sm:block" : ""} id="menu">
              <Navbar />
            </div>
            <Dashboard />
          </div>
        </div>
      </div>
      <Features />
      <MainBody />
      <Caurosel />
      <Footer />
    </>
  );
}

export default App;
