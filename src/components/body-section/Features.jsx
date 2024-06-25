import feature from "../../assets/feature.svg";
import setUpMan from "../../assets/set-up-man.svg";
import grapgh from "../../assets/logos/graph.svg";
import light from "../../assets/logos/light.svg";
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

const Features = () => {
  return (
    <div>
      {/*---------------- What you can do?-------------- */}
      <div className="container mx-auto  ">
        <h1 className="text-center text-2xl mb-10">
          What you <span className="text-yellow-500">can do?</span>
        </h1>
        <div className="flex flex-col items-center gap-x-12 md:flex-row justify-evenly">
          {data.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-col items-center my-6 lg:w-[437px]   w-1/2 "
              >
                {item.image}
                <h1 className="text-blue-900 text-xl my-7">{item.title}</h1>
                <p className="text-gray-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* ------------------------Our Feature -----------------------------------*/}
      <div className="container mx-auto  my-16 ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-10">
            Our <span className="text-[#FED369]">Features</span>
          </h1>
          <div className="flex flex-col items-center md:w-[1000px] md:gap-x-10 md:flex-row md:justify-center  gap-y-16">
            <div className="w-80 md:w-[300px] lg:w-[400px] xl:w-[500px]">
              <img src={feature} alt="features" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-y-7 md:w-[300px] lg:w-[400px] xl :w-[500px] text-gray-600">
              <div className="text-2xl font-bold my-6">
                <h1>Manage everything in one </h1>
                <h1>workspace</h1>
              </div>
              <h1 className="text-sm text-center md:text-start leading-8 text-lg lg:text-xl">
                Planning, tracking and delivering your team’s best work has
                never been easier. An integrated workspace that’s simple to use,
                TeamFlow lets you spend less time managing your work and more
                time actually doing it.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ------------Set up in minutes -------------------*/}
      <div className="max-w-[1840px] mx-auto bg-[#FAFAFF] py-4 md:py-6 lg:py-10 xl:py-20 2xl:py-28">
        <div className=" container flex flex-col md:flex-row md:justify-center items-center mx-4">
          <div className="md:w-[300px] lg:w-[400px] xl :w-[500px] flex flex-col gay-y-8" >
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
