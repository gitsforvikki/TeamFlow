import { useState } from "react";
import titleIcon from "../../../src/assets/titleIcon.svg";
function Navbar(props) {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
  return (
    <>
      <div>
        <div className="px-4 sm:px-1 pt-3 flex flex-col md:flex-row items-center gap-y-6 justify-around ">
          <div className="items-baseline  w-full sm:w-auto py-2 px-3 rounded-md hover:shadow-lg shadow-[#47478f] ">
            <div className="flex items-center gap-x-2 text-white ">
              <img src={titleIcon} alt="title-icon" />
              <h1 className="text-2xl">TeamFlow</h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-around ">
            <div className="flex flex-col sm:flex-row gap-1 items-baseline w-full sm:w-auto text-white">
              <div className="w-full rounded-md hover:shadow-lg shadow-[#47478f]  py-2 px-3  ">
                <select className="w-full sm:w-20  bg-transparent outline-none  hover:cursor-pointer">
                  <option value="" className="bg-gray-200 text-black">Product</option>
                  <option value="one" className="bg-gray-200 text-black">Product one</option>
                  <option value="two" className="bg-gray-200 text-black">Product two</option>
                </select>
              </div>
              <div className="w-full rounded-md hover:shadow-lg shadow-[#47478f]  py-2 px-3">
                <select className="w-full sm:w-20 bg-transparent outline-none  hover:cursor-pointer">
                  <option value=""className="bg-gray-200 text-black">Solution</option>
                  <option value="one" className="bg-gray-200 text-black">Solution one</option>
                  <option value="two" className="bg-gray-200 text-black">Solution two</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row gap-1 w-full">
                <span className="hover:shadow-lg shadow-[#47478f]  py-2 px-3 rounded-md   hover:cursor-pointer">
                  Enterprise
                </span>
                <span className="hover:shadow-lg shadow-[#47478f] py-2 px-3 rounded-md lg:text-black  hover:cursor-pointer">
                  Pricing
                </span>
              </div>
            </div>

            <div className="flex justify-between gap-x-2  sm:mx-1 px-3 sm:px-1">
              <span className="text-white  lg:text-gray-700 hover:cursor-pointer hover:text-black px-4 py-2 hover:bg-gray-200 rounded-md border ">
                Login
              </span>
              <span className="bg-[#FFCA1D] px-4 py-2 rounded-md hover:cursor-pointer hover:shadow-lg shadow-[rgb(233,210,111)]">
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
