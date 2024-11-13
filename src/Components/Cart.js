import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { imageCdnLink } from "../../utilities/constants";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { clearItems, removeItem } from "../../utilities/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  
  const clearAllItems = ()=>{
    dispatch(clearItems())
  }

  const removeAItem = (e)=>{
    dispatch(removeItem(e));
  }

  return (
    
    <div>
      {cartItems.length === 0 ? (
        <div className="text-center mt-48 font-mono font-bold text-3xl text-slate-700 mb-48">
          <div className="inline-flex items-center">
            No items in the cart yet. Why not explore 
            <Link to="/">
              <span className="ml-3"> our menu?</span>
            </Link>
            <div className=" ml-2 flex justify-center text-3xl text-slate-500">
              <MdMenuBook />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="shadow-lg pb-10 text-center mt-20 font-ubuntu font-bold text-4xl text-slate-600 mb-20  border-b-2 border-slate-300">
            <div className="inline-flex items-center ">
              My Cart
              <span className="ml-2">
                <RiShoppingCart2Fill />
              </span>
            </div>
          </div>
          <div className="text-white items-center justify-center"> <button className=" rounded-lg ml-[1250px] mb-4 px-3 py-1 bg-red-400 " onClick={clearAllItems}>Clear All</button></div>
         
          {cartItems.map((e) => (
            <div
              className=" text-left shadow-md rounded-lg bg-slate-100 shadow-gray-200 p-4 m-4 flex border-b-2 border-gray-300"
              key={e?.card?.info?.id}
            >
              <div className="w-10/12">
                <span className="text-xl text-gray-800">
                  {e?.card?.info?.name}
                </span>
                <span className="p-4">
                  - ₹
                  {(e?.card?.info?.defaultPrice ??
                    e?.card?.info?.price) / 100}
                </span>
                <div className="mt-4 text-sm">
                  {e?.card?.info?.description}
                </div>
              </div>
              <div className="ml-4 w-2/12">
                <img
                  className="w-28 rounded-lg"
                  src={imageCdnLink + e?.card?.info?.imageId}
                  alt="Menu item"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
