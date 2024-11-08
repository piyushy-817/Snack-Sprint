import useRestaurantMenu from "../../utilities/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";


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

      <div className="border-slate-700 mx-20">

    
      <div className=" mt-20 font-ubuntu text-left">
      <h1 className="  border-slate-700 font-bold text-4xl">{name}</h1>
      
      <div className=" space-y-6 mt-10 mb-10 p-4 rounded-2xl shadow-2xl border-x-2 text-left pl-10 border-slate-500" >
      <h3 className=" font-sans font-semibold text-lg pl-10" >📌{locality}</h3>
      <h3 className=" text-slate-500 text-base pl-16">{costForTwoMessage}</h3>
      <h4 className=" text-slate-700 text-lg font-manrope pl-16"> 🍜{cuisines}</h4>
      </div>
      </div>

      <ul className=" flex flex-wrap text-left" >
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((item) => (
           <h3 className=" shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-200 cursor-pointer  rounded-lg px-4 hover:shadow-lg hover:bg-red-100 mx-5 py-4 my-5 border-y-2 font-ubuntu text-lg" key={item.card.info.id}> {item.card.info.name}</h3>
          ))
        ) : (
          <p>Loading menu items...</p>
        )}
      </ul>  </div>
       




       <div className="mt-10 px-20 py-10">
        <div className="text-center border-b-4 border-red-600 text-4xl font-charm font-bold">Specials</div>
     
      <div className="mt-20">
        { cheeseBurstOffer && cheeseBurstOffer.length > 0 ? (
          cheeseBurstOffer.map((item) => (
            <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-200 cursor-pointer space-y-4 p-6 shadow-lg border-x-2 border-slate-800 mt-10 rounded-lg h-auto w-[1000px]" key={item.card.info.id}>
              <h5 className="font-manrope text-2xl text-slate-600"  >{item.card.info.name}</h5>
              <p   className="font-caveat text-2xl" > {item.card.info.description || "No description available"}</p>
            </div>
          ))
        ) : (
          <div><RestaurantMenuShimmer></RestaurantMenuShimmer></div>
        )}
        </div>







      </div>
    </div>
  );
};

export default RestaurantMenu;
