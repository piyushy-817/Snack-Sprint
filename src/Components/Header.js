import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utilities/useOnlineStatus";
import COmLogo from "../../utilities/com_logo.png";
import UserContext from "../../utilities/UserContext";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="shadow-lg flex  h-32 p-6 justify-between items-center rounded-lg  bg-red-100 relative">
        <Comlogo className=""></Comlogo>
        <Navitems></Navitems>
      </div>
    </div>
  );
};

const Comlogo = () => {
  return (
    <Link to={"/"}>
      <div>
        <img className="w-28 " src={COmLogo}></img>
      </div>
    </Link>
  );
};

const Navitems = () => {
  const datata = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  

  let initialVal = "Login";
  let newinitialval = "Logout";
  const [loginbuttonvar, setloginbuttonvar] = useState(initialVal);
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <ul className="flex pr-20 ">
        <Link to="/">
          <li className=" m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100  active:bg-red-400 hover:text-slate-900">
            Home
          </li>
        </Link>
        <Link to="/contact">
          <li className="m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100 active:bg-red-400 hover:text-slate-900">
            Contact Us
          </li>
        </Link>
        <Link to="/about">
          <li className="m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100 active:bg-red-400 hover:text-slate-900">
            About Us
          </li>
        </Link>
        <li className=" m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100 active:bg-red-400 hover:text-slate-900">
          <Link to={"/Cart"}>
            <div className="inline-flex items-center">
              
              <span className="text-lg mr-2">
                <RiShoppingCartFill />
              </span>
              <span>{cartItems.length}</span>
              
            </div>
          </Link>
        </li>
        <button
          onClick={() => {
            loginbuttonvar === "Login"
              ? setloginbuttonvar("Logout")
              : setloginbuttonvar("Login");
          }}
          className="ml-6 m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100  active:bg-red-400 hover:text-slate-900"
        >
          {loginbuttonvar}
        </button>
        <div className="absolute ml-[500px]  text-slate-700 opacity-50 mt-16">
         {loginbuttonvar === "Login" ? ( <div></div>)   :<div className="inline-flex text-center"><FaUser />  <span className="ml-2 ">{datata.loginUserinfo}</span></div>   } 
        </div>
      </ul>
      <div className="m-4 ml-10 absolute  top-0 right-0 pb-5 text-slate-700 opacity-50">
        Online Status : {onlineStatus ? "🟩" : "🟥"}
      </div>
    </div>
  );
};

export default Header;
