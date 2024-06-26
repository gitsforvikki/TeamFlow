import drive from "../../../src/assets/body-images/drive.svg";
import slack from "../../../src/assets/body-images/slack.svg";
import zoom from "../../../src/assets/body-images/zoom.svg";
import new1 from "../../../src/assets/body-images/new.svg";
import new2 from "../../../src/assets/body-images/new-2.svg";
import lady from "../../../src/assets/body-images/lady.svg";
import man from "../../../src/assets/body-images/man.svg";
import visual from "../../../src/assets/body-images/visual.svg";
const images = [drive, slack, zoom, new1, new2];

const MainBody = () => {
  return (
    <>
    {/* Integrate with your existing tools */}
      <div className="container mx-auto flex flex-col sm:gap-y-4 md:gap-y-10 lg:gap-y-16 justify-center items-center sm:my-4 md:my-10 lg:my-28">
        <div className=" flex flex-col justify-center items-center text-[#565656] text-2xl lg:text-3xl">
          <h1>
            <span className="text-[#FFCA1D]">Integrate</span> with your existing
            tools
          </h1>
          <h1>in a few clicks</h1>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-16">
          <div className="flex flex-col gap-y-5 sm:flex-row sm: gap-x-4 items-center justify-center">
            {images.map((each) => {
              return (
                <div key={each}>
                  <img
                    src={each}
                    alt="group-logo"
                    className="hover:cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center  mt-2 lg:mt-5 hover:cursor-pointer">
            <h1 className=" w-[150px] h-[50px] md:w-[180px] md:h-[60px] lg:w-[223px] lg:h-[70px] bg-[#FFCA1D] text-[#2C2C2C] text-1xl md:text-2xl rounded-lg flex items-center justify-center ">
              View All
            </h1>
          </div>
        </div>
      </div>
      {/* --------------Save time with Automations------------------ */}
      <div className="container mx-auto my-6 md:my-10 lg:my-28">
        <div className="flex flex-col gap-y-7 mx-4 md:flex-row md:gap-x-14 justify-center items-center">
          <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[470px]">
            <img src={lady} alt="lady-image" />
          </div>
          <div className=" flex flex-col gap-y-3 md:gap-y-7 md:w-[300px] lg:w-[400px] xl :w-[500px]">
            <h1 className="text-[#4A4A4A] text-2xl">
              Save time with Automations
            </h1>
            <div className="w-12 h-1 bg-[#FFCA1D]"></div>
            <div className="text-[#575757] leading-8 text-lg lg:text-xl">
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

      <div className="max-w-[1840px] mx-auto my-6 md:my-10 lg:my-28 bg-[#FAFAFF] py-4 md:py-6 lg:py-10 xl:py-20 2xl:py-28">
        <div className="container sm:mx-auto flex flex-col gap-y-7 mx-4 md:flex-row md:gap-x-14 justify-center items-center">
          <div className=" flex flex-col gap-y-5 md:gap-y-7 md:w-[300px] lg:w-[400px] xl :w-[500px]">
            <h1 className="text-[#4A4A4A] text-2xl">
              Visualize work with Views
            </h1>
            <div className="w-12 h-1 bg-[#686DF1]"></div>
            <div className="text-[#575757] leading-8 text-lg lg:text-xl">
              View data as a map, calendar, timeline, kanban, and more The
              easy-to-use, visual interface lets any team member jump in and get
              started, no training required.
            </div>
          </div>
          <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[470px]">
            <img src={visual} alt="lady-image" />
          </div>
        </div>
      </div>

      {/*.......... 24/7 Customer Support ...............*/}

      <div className="container mx-auto my-6 md:my-10 lg:my-28">
        <div className=" flex flex-col mx-4 md:flex-row md:gap-x-28 gap-y-10 justify-center items-center">
          <div className="w-80 md:w-[300px] lg:w-[370px] xl:w-[470px] relative">
            <img src={man} alt="lady-image" />
            <div className="flex flex-col gap-y-4 bg-white w-[250px] h-[120px] lg:w-[300px] lg:h-[135px] xl:w-[360px] xl:h-[160px] p-4 shadow-lg shadow-gray-300 rounded-lg absolute left-28 top-64 md:top-60 lg:left-36 lg:top-[19rem] xl:top-[24rem] xl:left-44 ">
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
          <div className="flex flex-col gap-y-4 md:w-[300px] lg:w-[400px] xl :w-[500px]">
            <h1 className="text-[#4A4A4A] text-2xl">24/7 Customer Support</h1>
            <div className="w-12 h-1 bg-[#FFCA1D]"></div>
            <div className="text-[#575757] leading-8 text-lg lg:text-xl">
              Our team is here to give you personalized support within the hour
              available 24/7. In accordance with our commitment to providing
              superior and professional service. Join daily live webinars, watch
              our tutorials, or browse through our knowledge base
            </div>
            <div className="flex  hover:cursor-pointer">
              <h1 className=" w-[120px] h-[40px] md:w-[130px] md:h-[45px] lg:w-[170px] lg:h-[50px]  bg-[#FFCA1D] text-[#2C2C2C] text-1xl md:text-2xl rounded-lg flex items-center justify-center ">
                Read more
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainBody;
