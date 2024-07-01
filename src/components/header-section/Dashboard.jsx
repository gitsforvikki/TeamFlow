import Group from "../../../src/assets/Group.svg";

const Dashboard = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-y-10 lg:flex-row lg:justify-around mt-16  ">
        <div className="px-6  mt-6 md:mt-10 lg:mt-14">
          <span className="px-3 py-2 text-4xl bg-white text-gray-500 rounded-md">
            Welcome to TeamFlow
          </span>
          <div className="text-white text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold  mt-4 lg:mt-14">
            <h1>Work the way that</h1>
            <h1>works for you</h1>
          </div>
          <span className="w-7 bg-[#3ADAD9] h-1"></span>
          <div className="text-white  md:mt-8 flex flex-col gap-y-2 sm:text-xl md:text-2xl lg:text-2xl my-10">
            <h1>Create, Build, Collaborate and ship products </h1>
            <h1>very faster</h1>
          </div>
          <span className="px-4 py-2 rounded-md bg-yellow-400  mt-10  hover:cursor-pointer ">
            Get started
          </span>
        </div>
        <div className="sm:mt-10 mt-6 md:mt-10 lg:mt-14 ">
          <img src={Group} />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
