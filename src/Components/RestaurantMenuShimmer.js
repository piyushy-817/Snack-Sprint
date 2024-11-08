const RestaurantMenuShimmer = () => {
  return (
    <div className="border-slate-700 mx-20">
      <div className=" mt-20 font-ubuntu text-left">
        <h1 className="  border-slate-700 font-bold text-4xl"></h1>

        <div className=" space-y-6 mt-10 mb-10 p-4 rounded-2xl shadow-2xl h-40 border-x-2 text-left pl-10 border-slate-500">
       
          <h3 className=" font-sans font-semibold text-lg pl-10"></h3>
          <h3 className=" text-slate-500 text-base pl-16"></h3>
          <h4 className=" text-slate-700 text-lg font-manrope pl-16"> </h4>
        </div>
      </div>

      <ul className=" flex flex-wrap text-left">
        <h3 className=" shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-200 cursor-pointer  rounded-lg px-4 hover:shadow-lg hover:bg-red-100 mx-5 py-4 my-5 border-y-2 font-ubuntu text-lg"></h3>
      </ul>

      <div className="mt-10 px-20 py-10">
        <div className="mt-20">
          <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-200 cursor-pointer space-y-4 p-6 shadow-lg border-x-2 border-slate-800 mt-10 rounded-lg h-40 w-[1000px]">
            <h5 className="font-manrope text-2xl text-slate-600"></h5>
            <p className="font-caveat text-2xl"> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
