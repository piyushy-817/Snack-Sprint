import { restCardApi } from "../../utilities/constants";




const Restcard = (props) => {
  const { myfetchedData } = props;

  

  return (
    <div className=" w-80 m-5 rounded-xl  p-4 hover:shadow-2xl hover:bg-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300">
      <img
        src={restCardApi + myfetchedData.info.cloudinaryImageId}
        alt="Restaurant Logo"
        className="rounded-xl h-auto w-96"
      ></img>
      <div className="mt-4 items-center text-center">
        <h3 className="font-bold text-2xl">{myfetchedData.info.name}</h3>
        <h4 className=" mt-10 font-semibold text-slate-700">
          {myfetchedData.info.costForTwo}
        </h4>
        <h4 className="font-caveat text-lg mt-2 text-slate-800 mb-4">
          {" "}
          {myfetchedData.info.cuisines.join(", ")}
        </h4>
        <span className="mr-2 text-slate-500">
          {" "}
          {`Rating :  ${myfetchedData.info.avgRatingString}⭐`}
        </span>{" "}
        <span className="text-slate-500">
          {myfetchedData.info.externalRatings.aggregatedRating.ratingCount
            ? `Rating Count: ${myfetchedData.info.externalRatings.aggregatedRating.ratingCount}`
            : null}
        </span>
        
      </div>
    </div>
  );
};
export const PromotedRestCard = (Restcard) => {
  return (props) => {
    return (
      <div>
        <label>Affordable</label>
        <Restcard {...props}></Restcard>
      </div>
    );
  };
};
export default Restcard;
