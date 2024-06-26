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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div className="container sm:mx-auto my-28 w-full flex flex-col items-center md:flex-row justify-around gap-y-10 mx-4 ">
        <div className="text-[#515151] text-2xl md:text-3xl">
          <div className="w-10 h-1 bg-[#FFCA1D] my-3"></div>
          <h1>See why over 100,000 teams choose</h1>
          <h1>TeamFlow.com</h1>
        </div>
        <div className="  sm:w-1/2 ">
          <Slider {...settings}>
            <div className="">
              <img
                src={hulu}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="">
              <img
                src={adobe}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="">
              <img
                src={universe}
                alt="hulu"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="">
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
      <div className="container mx-auto  ">
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
                <h1 className="text-blue-900 text-xl my-2 md:my-7">{item.title}</h1>
                <p className="text-gray-500 leading-8 md:text-xl text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* ------------------------Our Feature -----------------------------------*/}
      <div className="container mx-auto  my-6 ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl  mb-4 md:mb-10">
            Our <span className="text-[#FED369]">Features</span>
          </h1>
          <div className="flex flex-col items-center md:w-full md:gap-x-10 md:flex-row md:justify-center  gap-y-2 md:gap-y-10">
            <div className="w-80 md:w-[400px] lg:w-[500px] xl:w-1/3">
              <img src={feature} alt="features" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-y-2 md:w-[600px] lg:w-[700px] xl:w-1/3 text-gray-600">
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
          </div>
        </div>
      </div>

      {/* ------------Set up in minutes -------------------*/}
      <div className="max-w-[1840px]  bg-[#FAFAFF] py-4 md:py-6 lg:py-10 xl:py-20 2xl:py-28">
        <div className=" container sm:mx-auto mx-4 flex flex-col md:flex-row md:justify-center items-center ">
          <div className="md:w-[300px] lg:w-[400px] xl:w-1/3 flex flex-col gay-y-8">
            <div className="text-2xl font-semibold text-[#4A4A4A]">
              Set up in minutes
            </div>
            <div className="w-10 h-1 bg-[#FED369] my-3"></div>
            <div className="text-gray-500 leading-8 text-lg lg:text-xl">
              Get started fast with hundreds of visual and customizable
              templates - or create your own. Use our free online template maker
              to create beautiful template in minutes. Choose from hundreds of
              pre-made templates and tell stories with data with our easy
              drag-and-drop infographic creator.
            </div>
          </div>
          <div className="w-80 md:w-[300px] lg:w-[400px] xl:w-[500px]">
            <img src={setUpMan} alt="set-up-man" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
