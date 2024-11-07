import { restCardApi } from "../utilities/constants";

const Restcard = (props) => {
  const { myfetchedData } = props;

  return (
    <div className="">
      <img
        src={ restCardApi + myfetchedData.info.cloudinaryImageId}
        alt="Restaurant Logo"
        className="res-logo"
      ></img>
      <h3 className="card-h3">{myfetchedData.info.name}</h3>
      <h4 className="card-h4">{myfetchedData.info.costForTwo}</h4>
      <h4 className="card-h4"> {myfetchedData.info.cuisines}</h4>
    </div>
  );
};
export default Restcard;
