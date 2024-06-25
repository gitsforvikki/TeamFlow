import { useState } from "react";
import titleIcon from "../../../src/assets/titleIcon.svg";
function Navbar() {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <div
        className="flex flex-col gap-y-1 mx-4 sm:hidden hover:bg-gray-200 px-4 py-2 rounded-md "
        onClick={handleClick}
      >
        <span className="w-7 bg-gray-500 h-1"></span>
        <span className="w-7 bg-gray-500 h-1"></span>
        <span className="w-7 bg-gray-500 h-1"></span>
      </div>
      <div className="mx-4 px-4 sm:px-1 pt-16 flex flex-col sm:flex-row  gap-y-6 justify-around  ">
        <div className="items-baseline hover:bg-gray-300 w-full sm:w-auto py-2 px-3 rounded-md ">
          <div className="flex items-center gap-x-2 text-white">
            <img src={titleIcon} alt="title-icon" />
            <h1 className="text-3xl">TeamFlow</h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-baseline w-full sm:w-auto text-white">
          <div className="w-full hover:bg-gray-300  py-2 px-3 rounded-md ">
            <select className="w-full sm:w-20  bg-transparent outline-none ">
              <option value="">Product</option>
              <option value="one">Product one</option>
              <option value="two">Product two</option>
            </select>
          </div>
          <div className="w-full hover:bg-gray-300  py-2 px-3 rounded-md ">
            <select className="w-full sm:w-20 bg-transparent outline-none">
              <option value="">Solution</option>
              <option value="one">Solution one</option>
              <option value="two">Solution two</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <span className="hover:bg-gray-300  py-2 px-3 rounded-md ">
              Enterprise
            </span>
            <span className="hover:bg-gray-300  py-2 px-3 rounded-md ">
              Pricing
            </span>
          </div>
        </div>
        <div className="flex gap-x-2 items-baseline  sm:mx-1 px-3 sm:px-1">
          <span className="text-gray-300 xl:text-gray-700 hover:cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-md">
            Login
          </span>
          <span className="bg-secondry px-4 py-2 rounded-md hover:cursor-pointer">
            Sign Up
          </span>
        </div>
      </div>
    </>
  );
}
export default Navbar;
