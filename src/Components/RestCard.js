import { imageCdnLink } from "../../utilities/constants";

const Restcard = ({ myfetchedData }) => {

  return (
    <div
       data-testid ="resCard" className="w-80 m-5 rounded-xl  p-4 hover:shadow-2xl hover:bg-slate-200 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-300"
    >
      <img
        src={imageCdnLink + myfetchedData.info.cloudinaryImageId}
        alt="Restaurant Logo"
        className="rounded-xl h-auto w-96"
      ></img>
      <div className="mt-4 items-center text-center">
      <h3
  className=" text-slate-500 font-bold text-2xl"
>
  {myfetchedData.info.name}
</h3>


        <h4 className=" mt-10 font-semibold text-slate-500">
          {myfetchedData.info.costForTwo}
        </h4>
        <h4 className="font-caveat text-lg mt-2 text-slate-500 mb-4">
          {myfetchedData.info.cuisines.join(", ")}
        </h4>
        <span className="mr-2 text-slate-500">
          {`Rating :  ${myfetchedData.info.avgRatingString}⭐`}
        </span>
        <span className="text-slate-500">
          {myfetchedData.info.externalRatings.aggregatedRating.ratingCount
            ? `Rating Count: ${myfetchedData.info.externalRatings.aggregatedRating.ratingCount}`
            : null}
        </span>
      </div>
      <div className="text-center mt-2">{myfetchedData.info.sla.slaString}</div>
    </div>
  );
};
export const PromotedRestCard = (RestCard) => {
  return ({ myfetchedData, ...props }) => {
    return (
      <div className="relative">
        <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-xl text-xs font-semibold">
          Highest Rated
        </span>
        <RestCard myfetchedData = {myfetchedData} />
      </div>
    );
  };
};

export default Restcard;
