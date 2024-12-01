import useRestaurantMenu from "../../utilities/useRestaurantMenu";
import { useParams } from "react-router-dom";
import CatogoryItemList from "./CatogoryItemList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utilities/cartSlice";
import { FaLocationDot } from "react-icons/fa6";
import { IoPricetags } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const menuData = useRestaurantMenu(resId);
  const [showItemList , setShowItemList] =useState(false)

  const dispatch = useDispatch()

  const ourPicksAdd = (item)=>{
    dispatch(addItem(item))
  }

  const name = menuData?.data?.cards?.[2]?.card?.card?.info?.name;
  const locality = menuData?.data?.cards?.[2]?.card?.card?.info?.locality;
  const costForTwoMessage =
    menuData?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
  const cuisines =
    menuData?.data?.cards?.[2]?.card?.card?.info?.cuisines.join(",");



  const itemCards =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards;

 
    

  const menuCategoryList =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  

  return (
    <div>
    <div className="border-slate-700 mx-20">
      <div className="  mt-20 font-ubuntu ">
        <h1 className=" ml-20 border-slate-700 font-bold text-4xl">{name}</h1>

        <div className=" flex flex-col space-y-6 mt-10 mb-10 p-4 rounded-2xl shadow-xl  border-x-2 text-left pl-10 border-slate-300">
          <h3 className=" inline-flex text-center font-sans font-semibold text-lg pl-16">
          <FaLocationDot /> <span className="ml-2">{locality}</span>
          </h3>
          <h3 className=" inline-flex text-center text-slate-800 text-base pl-16">
          <IoPricetags />  <span className="ml-2">{costForTwoMessage}</span>
          </h3>
          <h4 className=" inline-flex text-center text-slate-700 text-lg font-manrope pl-16">
           <span className="text-lg"><MdFoodBank /> </span>  <span className="ml-2">{cuisines} </span>
          </h4>
        </div>
      </div>

      <div className="px-40 mt-4 mb-2 text-4xl font-charm font-bold  border-b-2 border-red-400 text-center">Our Picks</div>
      <ul  className=" flex flex-wrap text-left">
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <h3  onClick={()=>ourPicksAdd(item)}
              className=" shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-200 cursor-pointer  rounded-lg px-4 hover:shadow-lg hover:bg-red-100 mx-5 py-4 my-5 border-y-2 font-ubuntu text-lg"
              key={item.card.info.id}
            >
              {" "}
              {item.card.info.name}
            </h3>
          ))
        ) : (
          <div className="text-center font-sans font-semibold text-slate-600 ">Loading menu items...</div>
        )}
      </ul>
    </div>

    <div className="mt-10 px-20 py-10">
      <div className="text-center border-b-4 border-red-600 text-4xl font-charm font-bold">
      Delicious Options by Category
      </div>
    </div>




    <div className="text-center mb-40 m-auto w-6/12 ">
      {menuCategoryList && menuCategoryList.length > 0 ? (
        menuCategoryList.map((cato, index) => (
          <CatogoryItemList showList={index === showItemList ? true : false} setShowItemList={()=>{setShowItemList(index)}} key={index} data={cato.card.card} />
        ))
      ) : (
        <div  className="text-center font-sans font-semibold text-slate-600 text-2xl"> No items Yet</div>
      )}
    </div>




  </div>
  );
};

export default RestaurantMenu;
