import fb from "../../../src/assets/logos/footer-logo/fb.svg";
import insta from "../../../src/assets/logos/footer-logo/insta.svg";
import x from "../../../src/assets/logos/footer-logo/x.svg";
import ytube from "../../../src/assets/logos/footer-logo/ytube.svg";
import logo from "../../../src/assets/logos/footer-logo/logo.svg";
const logos = [fb, insta, x, ytube];

const data = [
  {
    title: "Product",
    subtitle: [
      "Product",
      "Pricing",
      "Enterprise",
      "Partners",
      "Affiliate",
      "Integrations",
      "Developer",
      "Students",
      "Work OS",
    ],
  },
  {
    title: "Team",
    subtitle: [
      "About Us",
      "Contact Us",
      "Find a Partner",
      "Careers",
      "Affiliate",
      "In the news",
    ],
  },
  {
    title: "Solution",
    subtitle: [
      "Project Management",
      "Marketing",
      "CRM and sales",
      "Constructions",
      "Software Development",
      "Creative Production",
      "Remote Work",
      "HR",
      "IT",
      "See more solutions",
    ],
  },
  {
    title: "Resource",
    subtitle: [
      "Knowledge Base",
      "Guide",
      "Daily Webinars",
      "Community",
      "Customer Stories",
      "Templates",
      "Professional Services",
      "Video Tutorials",
      "Blog",
      "Podcast",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className=" container mx-auto my-10 md:mt-auto   ">
        <div className="grid grid-cols-1 lg:grid-flow-row gap-x-4 lg:grid-cols-10  mx-4">
          <div className="lg:col-span-3">
            <div className=" flex flex-col items-center sm:items-start my-10 gap-y-11 col-span-4 lg:col-span-1">
              <div className=" flex gap-x-1">
                <img
                  src={logo}
                  alt="footer-logo"
                  className="w-[35px] h-[35px]"
                />
                <h1 className="text-2xl">
                  <span className="text-[#5565F0]">Team</span>
                  <span className="text-[#EB801D]">Flow</span>
                </h1>
              </div>
              <div className="">
                <p className="text-sm text-gray-500">
                  All Rights Reserved © teamflow.com
                </p>
              </div>
              <div className="">
                <h1 className="text-sm text-[#2B3377]">Address</h1>
                <p className="text-sm text-gray-500">
                  26 W 12th St. New York, NY 10342, NYC
                </p>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-[#2B3377] text-xl">Social Media</h1>
                <div className="flex items-center gap-x-4">
                  {logos.map((each) => {
                    return (
                      <span key={each} className="rounded-full">
                        <img
                          src={each}
                          alt=""
                          className="bg-gray-950 w-7 h-7 rounded-full"
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className=" mt-10">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
                {data.map((item) => {
                  return (
                    <div key={item.title} className="">
                      <h1 className="mb-4 text-2xl font-semibold">
                        {item.title}
                      </h1>
                      <div className="flex flex-col gap-y-4">
                        {item.subtitle?.map((each) => {
                          return <h1 className="text-gray-500">{each}</h1>;
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  border-t-2 border-gray-300 mb-28 ">
        <div className=" flex flex-col gap-y-4 md:flex-row md:justify-between text-gray-500 mt-8 mx-4">
          <div className="">
            <p>Copyright © 2023 </p>
          </div>
          <div className="">
            <p>
              All Rights Reserved |{" "}
              <a href="#" className="text-blue-500 underline">
                Terms and Conditions
              </a>{" "}
              |{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
