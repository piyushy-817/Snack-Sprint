const Shimmer = () => {
  return (
    <div>
      <div className=" shadow-lg w-80 h-auto bg-slate-100 rounded-xl border m-10 mt-64   ">
        <div className="p-2 ">
          <div className="place-items-center justify-center align-middle object-cover rounded-xl h-[350px]  w-auto border   bg-slate-200">
          <div className="mt-32 loader rounded-full border-4 border-t-4 border-gray-300 border-t-slate-500 w-8 h-8 animate-spin mb-2"></div>
          </div>
          <div className="rounded-xl mt-4 object-fill border w-auto h-52  bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
