import fb from "../../../src/assets/logos/footer-logo/fb.svg";
import insta from "../../../src/assets/logos/footer-logo/insta.svg";
import x from "../../../src/assets/logos/footer-logo/x.svg";
import ytube from "../../../src/assets/logos/footer-logo/ytube.svg";
import logo from "../../../src/assets/logos/footer-logo/logo.svg";
const logos = [fb, insta, x, ytube];

const Footer = () => {
  return (
    <>
      <div className=" container mx-auto mt-10 md:mt-auto flex flex-col  sm:grid sm:grid-flow-col grid-cols-6 gap-x-1">
        <div className=" flex flex-col items-center sm:items-start my-10 gap-y-11 col-span-2 lg:col-span-1">
          <div className=" flex gap-x-1">
            <img src={logo} alt="footer-logo" className="w-[35px] h-[35px]"/>
            <h1 className="text-2xl">
              <span className="text-[#5565F0]">Team</span>
              <span className="text-[#EB801D]">Flow</span>
            </h1>
          </div>
          <div className="">
            <p className="text-xs text-gray-500">
              All Rights Reserved © teamflow.com
            </p>
          </div>
          <div className="">
            <h1 className="text-xs text-[#2B3377]">Address</h1>
            <p className="text-xs text-gray-500">
              26 W 12th St. New York, NY 10342, NYC
            </p>
          </div>
          <div className="">
            <h1 className="text-[#2B3377]">Social Media</h1>
            <div className="flex items-center gap-x-4">
              {logos.map((each) => {
                return (
                  <span key={each} className="rounded-full">
                    <img src={each} alt="" className="bg-gray-950 w-5 h-5 rounded-full" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-6 md:my-10">
          <div className=" flex justify-evenly ">
            <div>
              <h1 className="text-[#2B3377] mb-8">Product</h1>
              <div className="flex flex-col gap-y-4  text-xs text-[#5C5E87]">
                <p>Product</p>
                <p>Pricing</p>
                <p>Enterprise</p>
                <p>Partners</p>
                <p>Affiliate</p>
                <p>Integrations</p>
                <p>Developer</p>
                <p>Students</p>
                <p>Work OS</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-[#2B3377] mb-8">Team</h1>
              <div className="flex flex-col gap-y-4 text-xs text-[#5C5E87]">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Find a Partner</p>
                <p>Careers</p>
                <p>Affiliate</p>
                <p>In the news</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-[#2B3377] mb-8">Solution </h1>
              <div className="flex flex-col gap-y-4 text-xs text-[#5C5E87]">
                <p>Project Management</p>
                <p>Marketing</p>
                <p>CRM and sells</p>
                <p>Constructions</p>
                <p>Software Development</p>
                <p>Creative Production</p>
                <p>Remote Work</p>
                <p>HR</p>
                <p>IT</p>
                <p>See more solution</p>
              </div>
            </div>
            <div className="">
              <h1 className="text-[#2B3377] mb-8">Resources</h1>
              <div className=" flex flex-col gap-y-4 text-xs text-[#5C5E87]">
                <p>Knowledge Base</p>
                <p>Guide</p>
                <p>Daily Webinars</p>
                <p>Comminity</p>
                <p>Customer Stories</p>
                <p>Templates</p>
                <p>Profesionals Services</p>
                <p>Video Tutorials</p>
                <p>Blog</p>
                <p>Podcast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
