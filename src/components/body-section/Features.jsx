import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feature from "../../assets/feature.svg";
import setUpMan from "../../assets/set-up-man.svg";
import grapgh from "../../assets/logos/graph.svg";
import light from "../../assets/logos/light.svg";
import adobe from "../../assets/adobe.svg";
import hulu from "../../assets/hulu.svg";
import studio from "../../assets/studio.svg";
import universe from "../../assets/universe.svg";
import success from "../../assets/logos/success.svg";
const data = [
  {
    image: <img src={grapgh} className={`bg-[#FED369] p-4 rounded-xl`} />,
    title: "Business Planning",
    description:
      "Our Business Plan is a written document describing a company’s core business activities.",
  },
  {
    image: <img src={light} className={`bg-[#3ADAD9] p-4 rounded-xl`} />,
    title: "Financial Planning",
    description:
      "Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan.",
  },
  {
    image: <img src={success} className={`bg-[#FD9B79] p-4 rounded-xl`} />,
    title: "Market Analysis",
    description:
      "A market analysis is a quantitative and qualitative assessment of a market.It looks into the size of the market.",
  },
];
const image = [hulu, studio, universe, adobe];

const Features = () => {
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
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Adjusted breakpoint for 640px
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>

      {/* carousel */}
      <div className=" container sm:mx-auto my-28 w-full gap-y-10 mx-4 lg:grid grid-cols-2 overflow-hidden">
        <div className="text-[#515151] text-2xl md:text-3xl flex flex-col items-center">
          <div className="w-10 h-1 bg-[#FFCA1D] my-3"></div>
          <h1>See why over 100,000 teams choose</h1>
          <h1>TeamFlow.com</h1>
        </div>
        <div className=" slider-wrapper container mx-auto ">
          <Slider {...settings} className="">
            <div className="  w-full flex justify-center items-center">
              <img
                src={hulu}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={adobe}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={universe}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={studio}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
          </Slider>
        </div>
      </div>

      
      {/*---------------- What you can do?-------------- */}
      <div className="container mx-auto mt-6 2xl:mt-28 md:mt-10  ">
        <div className="mx-4">
          <h1 className="text-center text-2xl md:text-3xl mb-2 md:mb-10">
            What you <span className="text-yellow-500">can do?</span>
          </h1>
          <div className="flex flex-col items-center gap-x-12 md:flex-row justify-evenly">
            {data.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center my-2 lg:w-[437px]   w-1/2 "
                >
                  {item.image}
                  <h1 className="text-blue-900 text-xl my-2 md:my-7">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 leading-8 md:text-xl text-center">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      

      {/* ------------------------Our Feature -----------------------------------*/}
      <div className="container mx-auto  my-6 ">
        <div className="grid grid-cols-1 justify-items-center mx-4">
          <h1 className="text-3xl lg:text-4xl lg:font-bold  mb-4 md:mb-4">
            Our <span className="text-[#FED369]">Features</span>
          </h1>
          {/* <div className="grid grid-cols-1 md:grid-flow-row md:grid-cols-2 justify-items-center">
            <div className=" w-[250px] md:w-[300px] lg:w-[400px] xl:w-[450px]">
              <img src={feature} alt="features" />
            </div>
            <div className="grid grid-cols-1 justify-items-center content-center md:justify-items-start gap-y-2  text-gray-600">
              <div className="text-2xl lg:text-3xl flex flex-col gap-y-1 md:gap-y-2  font-bold  my-2 md:my-6">
                <p>Manage everything in one workspace</p>
              </div>
              <p className="text-center leading-8 text-lg md:text-start  lg:text-xl">
                Planning, tracking and delivering your team’s best work has
                never been easier. An integrated workspace that’s simple to use,
                TeamFlow lets you spend less time managing your work and more
                time actually doing it.
              </p>
            </div>
          </div> */}
          <div className="container mx-auto my-6 md:my-10 lg:my-28">
            <div className="flex flex-col gap-y-7 mx-4 md:flex-row md:gap-x-14 justify-center items-center">
              <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[470px]">
                <img src={feature} alt="lady-image" />
              </div>
              <div className=" flex flex-col gap-y-3 md:gap-y-7 md:w-[300px] lg:w-[400px] xl :w-[500px]">
                <h1 className="text-[#4A4A4A] text-2xl">
                Manage everything in one workspace
                </h1>
                <div className="w-12 h-1 bg-[#FFCA1D]"></div>
                <div className="text-[#575757] leading-8 text-lg lg:text-xl">
                Planning, tracking and delivering your team’s best work has
                never been easier. An integrated workspace that’s simple to use,
                TeamFlow lets you spend less time managing your work and more
                time actually doing it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------Set up in minutes -------------------*/}
      <div className="  bg-[#FAFAFF] py-4 md:py-6 lg:py-10 xl:py-20 2xl:py-28">
        <div className="  container  mx-auto  flex flex-col md:flex-row md:justify-center items-center ">
          <div className="md:w-[300px] lg:w-[400px] xl:w-1/3 flex flex-col gay-y-8 mx-4">
            <div className="text-2xl font-semibold text-[#4A4A4A]">
              Set up in minutes
            </div>
            <div className="w-10 h-1 bg-[#FED369] my-3"></div>
            <div className="text-gray-500 leading-8 text-lg lg:text-xl">
              Get started fast with hundreds of visual and customizable
              templates - or create your own. Use our free online template maker
              to create beautiful template in minutes. Choose from hundreds of
              pre-made templates and tell with data with our easy drag-and-drop
              infographic creator.
            </div>
          </div>
          <div className="w-1/2 md:w-[300px] lg:w-[400px] xl:w-[500px]">
            <img src={setUpMan} alt="set-up-man" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
