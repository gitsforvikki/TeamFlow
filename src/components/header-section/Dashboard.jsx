import Group from "../../../src/assets/Group.svg";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto lg:flex lg:justify-around">
        <div className="w-[677px] h-[323px] sm:h-[350px] md:h-[450px] px-6  ml-6 relative mt-32">
          <span className="px-3 py-2 bg-white text-gray-500 rounded-md">
            Welcome to TeamFlow
          </span>
          <div className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mt-4">
            <h1>Work the way that</h1>
            <h1>works for you</h1>
          </div>
          <span className="w-7 bg-[#3ADAD9] h-1"></span>
          <div className="text-white mt-10 md:mt-16 flex flex-col gap-y-2 sm:text-xl md:text-2xl lg:text-3xl">
            <h1>Create, Build, Collaborate and ship products </h1>
            <h1>very faster</h1>
          </div>
          <span className="px-4 py-2 rounded-md bg-yellow-400 absolute bottom-0 left-4">
            Get started
          </span>
        </div>
        <div className=" mt-3 sm:mt-10 lg:mt-32">
          <img src={Group} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
