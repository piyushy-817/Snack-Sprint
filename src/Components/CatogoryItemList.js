import { useState } from "react";
import MenuItemList from "./MenuItemList";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const CatogoryItemList = ({ data, showList , setShowItemList }) => {
  

  const handleItems = () => {
    setShowItemList(showList )
    
  };

  return (
    <div  className=" items-center text-center ">


        
      <button className=" rounded-lg  w-full my-6  mx-auto shadow-lg p-4 bg-gray-50 flex justify-between " onClick={handleItems}>
        <span className="font-bold font-ubuntu text-2xl text-slate-600">{data.title}({data.itemCards.length})</span>
        
        <span> {showList ?<FaArrowUp></FaArrowUp>  :<FaArrowDown></FaArrowDown> }</span>
      </button>

      <div>
        {showList && <MenuItemList itemData={data.itemCards}></MenuItemList>}
      </div>
    </div>
  );
};

export default CatogoryItemList;
