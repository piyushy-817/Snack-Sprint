import { addItem } from "../../utilities/cartSlice";
import { imageCdnLink } from "../../utilities/constants";
import { useDispatch } from "react-redux";

const MenuItemList = ({ itemData }) => {
 const dispatch = useDispatch ()
  const handleAddItem = (e)=>{
    dispatch(addItem(e))
  }
 


  return (
    <div>
  {itemData.map((e) => {
    return (
      <div data-testid= " itemList"
            className=" text-left shadow-md rounded-lg bg-slate-100 shadow-gray-200 p-4 m-4 flex  border-b-2 border-gray-300"
            key={e.card.info.id}
          >
            <div className="w-10/12">
              <span className="text-xl text-gray-800">{e.card.info.name}</span>
              <span className="p-4">
                - ₹{(e.card.info.defaultPrice ?? e.card.info.price) / 100}
              </span>
              <div className="mt-4 text-sm">{e.card.info.description}</div>
            </div>

            <div className="ml-4 w-2/12 ">
            <button onClick={()=>handleAddItem(e)} className= "cursor-pointer text-sm font-manrope px-2 py-0.5 ml-8 mt-2 absolute rounded-lg text-white bg-slate-700">Add +</button>
            <img
              className="w-28 rounded-lg"
              src={imageCdnLink + e.card.info.imageId}
              alt="Menu item"
            /></div>
          </div>
        );
      })}
    </div>

  );
};

export default MenuItemList;
