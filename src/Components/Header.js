import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utilities/useOnlineStatus";
import COmLogo from "../../utilities/com_logo.png";
import  UserContext  from "../../utilities/UserContext";



const Header = () => {
 
  




  return (
    <div >
      <div className="shadow-lg flex m-4 h-32 p-6 justify-between items-center rounded-lg  bg-red-100 relative">
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
  const datata = useContext(UserContext)
  
  let initialVal = "Login";
  let newinitialval = "Logout";
  const [loginbuttonvar, setloginbuttonvar] = useState(initialVal);
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      <ul className="flex pr-20 ">
        
        <li className=" m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100  active:bg-red-400 hover:text-slate-900">
          <Link to="/">Home</Link>
        </li>
        <li className="m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100 active:bg-red-400 hover:text-slate-900">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100 active:bg-red-400 hover:text-slate-900">
          <Link to="/about">About Us</Link>
        </li>
        <li className="m-4 font-bold px-3 py-2 active:text-slate-100 text-slate-500 rounded-lg hover:bg-slate-100 active:bg-red-400 hover:text-slate-900">
          <Link>Cart</Link>
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
        </button >
        <div className="absolute ml-[500px]  text-slate-700 opacity-50 mt-16">
        User: {datata.loginUserinfo}

         

        </div>
        
      </ul>
      <div className="m-4 ml-10 absolute  top-0 right-0 pb-5 text-slate-700 opacity-50">
          Online Status : {onlineStatus ? "🟩" : "🟥"}
        </div>
    </div>
  );
};

export default Header;
