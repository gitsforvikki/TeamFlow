import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import send from "../../../src/assets/caeousel/send.svg";
import email from "../../../src/assets/caeousel/email.svg";
import img1 from "../../../src/assets/caeousel/carousel-1.svg";
import img2 from "../../../src/assets/caeousel/carousel-2.svg";
import img4 from "../../../src/assets/caeousel/carousel-4.svg";

const Caurosel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container mx-auto py-6 md:py-12 lg:py-20">
        <Slider {...settings}>
          <div className="w-full">
            <img src={img1} alt="img3" className="w-full " />
          </div>
          <div className="w-full">
            <img src={img2} alt="img2" className="w-full" />
          </div>
          {/* <div className="w-full h-[380px]">
            <img src={img4} alt="img4" className="w-full h-full" />
          </div> */}
        </Slider>
      </div>

      <div className="max-w-[1840px] w-full bg-[#FAFAFF] py-6 sm:py-10 md:py-12 lg:py-28">
        <div className="container mx-auto flex flex-col gap-y-10 items-center justify-center">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h1 className="text-[#EB801D]">Support</h1>
            <h1 className="text-[#2D3150] font-semibold text-2xl lg:text-3xl">
              Subscribe Newsletter & get
            </h1>
            <h1 className="text-[#2D3150] text-xl lg:text-2xl">Company News</h1>
          </div>
          <div className="w-[400px] h-[50px] md:w-[500px]  bg-white shadow-sm shadow-gray-200 flex justify-between">
            <div className="flex items-center gap-x-2 mx-4">
              <img src={email} alt=" email" className="w-7 h-7" />
              <input
                type="text"
                placeholder="Your email"
                className="outline-none"
              />
            </div>
            <div className=" bg-[#686DF1]  rounded-xl flex items-center justify-center gap-x-3 lg:gap-x-6 px-8 mx-6 hover:cursor-pointer">
              <img src={send} alt=" send" className="w-7 h-7" />
              <h1 className="text-sm text-white">Subscribe</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Caurosel;
