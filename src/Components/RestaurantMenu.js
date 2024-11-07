import useRestaurantMenu from "../utilities/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  
  const {resId} = useParams();
  const menuData = useRestaurantMenu(resId)
  const name = menuData?.data?.cards?.[2]?.card?.card?.info?.name;
  const locality = menuData?.data?.cards?.[2]?.card?.card?.info?.locality;
  const costForTwoMessage =
    menuData?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
  const cuisines =
    menuData?.data?.cards?.[2]?.card?.card?.info?.cuisines.join(",");

  const itemCards =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

 /* const {
    name: cheeseBurstOfferName,
    description: cheeseBurstOfferDescription,
    defaultPrice: cheeseBurstOfferDefaultPrice,
  } = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
    ?.card?.card.itemCards[0].info || [ ] ;*/

    const cheeseBurstOffer = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
    ?.card?.card.itemCards;

  

  return (
    <div >
      
      <h1>{name}</h1>
      <h3>{locality}</h3>
      <h3>{costForTwoMessage}</h3>
      <h4>{cuisines}</h4>

      <ul >
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <h3 className="menu-item" key={item.card.info.id}>{item.card.info.name}</h3>
          ))
        ) : (
          <p>Loading menu items...</p>
        )}
      </ul>
       
     
      <div className="menu-container">
        { cheeseBurstOffer && cheeseBurstOffer.length > 0 ? (
          cheeseBurstOffer.map((item) => (
            <div className="menu-item" key={item.card.info.id}>
              <h5   >{item.card.info.name}</h5>
              <p    > {item.card.info.description || "No description available"}</p>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
