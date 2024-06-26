import { useState } from "react";
import titleIcon from "../../../src/assets/titleIcon.svg";
function Navbar(props) {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden(!hidden);
  };
console.log(props.toggler)
  return (
    <div >
      <div className="px-4 sm:px-1 pt-3 flex flex-col sm:flex-row items-center gap-y-6 justify-around  ">
        <div className="items-baseline  w-full sm:w-auto py-2 px-3 rounded-md hover:shadow-lg shadow-[#47478f] ">
          <div className="flex items-center gap-x-2 text-white ">
            <img src={titleIcon} alt="title-icon" />
            <h1 className="text-2xl">TeamFlow</h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 items-baseline w-full sm:w-auto text-white">
          <div className="w-full rounded-md hover:shadow-lg shadow-[#47478f]  py-2 px-3  ">
            <select className="w-full sm:w-20  bg-transparent outline-none  ">
              <option value="">Product</option>
              <option value="one">Product one</option>
              <option value="two">Product two</option>
            </select>
          </div>
          <div className="w-full rounded-md hover:shadow-lg shadow-[#47478f]  py-2 px-3">
            <select className="w-full sm:w-20 bg-transparent outline-none">
              <option value="">Solution</option>
              <option value="one">Solution one</option>
              <option value="two">Solution two</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row gap-1 w-full">
            <span className="hover:shadow-lg shadow-[#47478f]  py-2 px-3 rounded-md ">
              Enterprise
            </span>
            <span className="hover:shadow-lg shadow-[#47478f] py-2 px-3 rounded-md ">
              Pricing
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-2   sm:mx-1 px-3 sm:px-1">
          <span className="text-gray-300 md:text-gray-700 hover:cursor-pointer px-4 py-2 hover:bg-gray-200 rounded-md">
            Login
          </span>
          <span className="bg-[#FFCA1D] px-4 py-2 rounded-md hover:cursor-pointer hover:shadow-lg shadow-[rgb(233,210,111)]">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
