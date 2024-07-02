import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import drive from "../../../src/assets/body-images/drive.svg";
import slack from "../../../src/assets/body-images/slack.svg";
import zoom from "../../../src/assets/body-images/zoom.svg";
import new1 from "../../../src/assets/body-images/new.svg";
import new2 from "../../../src/assets/body-images/new-2.svg";
import lady from "../../../src/assets/body-images/lady2.svg";
import man from "../../../src/assets/body-images/man.svg";
import visual from "../../../src/assets/body-images/visual.svg";
const images = [drive, slack, zoom, new1, new2];

const MainBody = () => {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768, // Adjusted breakpoint for 640px
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      {/* Integrate with your existing tools */}
      <div className="container mx-auto sm:my-4 md:my-10 lg:my-28 overflow-hidden">
        <div className=" flex flex-col justify-center items-center text-[#565656] text-2xl lg:text-3xl">
          <h1>
            <span className="text-[#FFCA1D]">Integrate</span> with your existing
            tools
          </h1>
          <h1>in a few clicks</h1>
        </div>
        <div className=" my-10">
          <Slider {...settings}>
            <div className="">
              <img
                src={drive}
                alt="group-logo"
                className="hover:cursor-pointer"
              />
            </div>
            <div className="">
              <img
                src={slack}
                alt="group-logo"
                className="hover:cursor-pointer"
              />
            </div>
            <div className="">
              <img
                src={zoom}
                alt="group-logo"
                className="hover:cursor-pointer"
              />
            </div>
            <div className="">
              <img
                src={new1}
                alt="group-logo"
                className="hover:cursor-pointer"
              />
            </div>
          </Slider>
        </div>
        <div className="flex items-center justify-center  mt-2 lg:mt-5 hover:cursor-pointer">
          <button className="  px-3 lg:px-4 py-1 lg:py-2 bg-[#FFCA1D] text-[#2C2C2C] text-1xl md:text-2xl rounded-lg flex items-center justify-center ">
            View All
          </button>
        </div>
      </div>
      {/* --------------Save time with Automations------------------ */}
      <div className="container mx-auto my-6 md:my-10 lg:my-28">
        <div className="flex flex-col gap-y-7 mx-4 md:flex-row md:gap-x-24 justify-evenly items-center">
          <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[470px]">
            <img src={lady} alt="lady-image" />
          </div>
          <div className=" flex flex-col gap-y-3 md:gap-y-7 md:w-[300px] lg:w-[700px] ">
            <h1 className="text-[#4A4A4A] text-2xl lg:text-4xl">
              Save time with Automations
            </h1>
            <div className="w-12 h-1 bg-[#FFCA1D]"></div>
            <div className="text-[#575757] leading-8">
              Automate the repetitive work in seconds so you can avoid human
              error and focus on what matters. It gives the impression of
              software that its highly automated which implies that it is good
              for client for who want to save time and manage team members
              easily.
            </div>
          </div>
        </div>
      </div>
      {/* -----------------Visualize work with Views --------------------*/}
      <div className="bg-[#FAFAFF] py-6 ">
        <div className="container mx-auto my-6 md:my-10 lg:my-28">
          <div className="flex flex-col gap-y-7 mx-4 md:flex-row md:gap-x-32 justify-center items-center">
            <div className=" flex flex-col gap-y-3 md:gap-y-7 md:w-[300px] lg:w-[700px] ">
              <h1 className="text-[#4A4A4A] text-2xl lg:text-4xl">
                Visualize work with Views
              </h1>
              <div className="w-12 h-1 bg-[#686DF1]"></div>
              <div className="text-[#575757] leading-8  ">
                Automate the repetitive work in seconds so you can avoid human
                error and focus on what matters. It gives the impression of
                software that its highly automated which implies that it is good
                for client for who want to save time and manage team members
                easily.
              </div>
            </div>
            <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[400px]">
              <img src={visual} alt="lady-image" />
            </div>
          </div>
        </div>
      </div>
      {/*.......... 24/7 Customer Support ...............*/}

      <div className="container mx-auto my-6 md:my-10 lg:my-28">
        <div className=" flex flex-col mx-4 md:flex-row md:gap-x-32 gap-y-10 justify-center items-center">
          <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[470px] relative overflow-hidden">
            <img src={man} alt="lady-image" />
            <div className=" customer-support  ">
              <div className=" flex flex-col gap-y-2 text-xs lg:text-sm text-[#3C405F]">
                <span>“We ensure that any information you </span>
                <span>need is served immediately by</span>
                <span>simply contacting our team”</span>
              </div>
              <div className="text-xs lg:text-sm flex justify-between">
                <h1 className="text-[#2D3150]">Peter Fennimore</h1>
                <h1 className="text-[#9C9FBB]">Head of CS </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:w-[300px] lg:w-[700px]">
            <h1 className="text-[#4A4A4A] text-2xl lg:text-4xl font-semibold">24/7 Customer Support</h1>
            <div className="w-16 h-1 bg-[#FFCA1D]"></div>
            <div className="text-[#575757] leading-8 ">
              Our team is here to give you personalized support within the hour
              available 24/7. In accordance with our commitment to providing
              superior and professional service. Join daily live webinars, watch
              our tutorials, or browse through our knowledge base
            </div>
            <div className="flex  hover:cursor-pointer">
              <button className="  px-3 lg:px-4 py-1 lg:py-2  bg-[#FFCA1D] text-[#2C2C2C] text-[20px] md:text-[26px] rounded-lg flex items-center justify-center ">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainBody;
