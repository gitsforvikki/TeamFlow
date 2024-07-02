import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import send from "../../../src/assets/caeousel/send.svg";
import email from "../../../src/assets/caeousel/email.svg";
import img1 from "../../../src/assets/caeousel/carousel-1.svg";
import img2 from "../../../src/assets/caeousel/carousel-2.svg";

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
      <div className="container mx-auto py-6 md:py-12 lg:py-20 overflow-hidden space-y-10">
        <div className="flex flex-col gap-y-6 text-5xl font-bold">
          <h1 className="text-center text-[#2D2D2D]   ">Client</h1>
          <h1 className="text-center ">
            <span className="text-[#FFCA1D]">Testimonials</span>
          </h1>
        </div>
        <Slider {...settings}>
          <div className="w-full">
            <img src={img1} alt="img3" className="w-full " />
          </div>
          <div className="w-full">
            <img src={img2} alt="img2" className="w-full" />
          </div>
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
          <div className="flex justify-center container mx-auto overflow-hidden">
            <div className="flex justify-between items-center  shadow-xl bg-white p-1 rounded-xl px-6 py-2 ">
              <div className=" flex gap-x-4 items-center ">
                <img src={email} alt="mail-box" className="w-6 h-6" />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="outline-none space-x-2 "
                />
              </div>
              <div className=" bg-[#816AFF] text-white rounded-xl flex justify-center items-center px-6 space-x-2 py-3 hover:cursor-pointer">
                <img src={send} alt="send" className="w-5 h-5" />
                <p className="text-white">Subscribe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Caurosel;
