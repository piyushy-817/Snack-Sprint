import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import comLogo from "../../utilities/com_logo.png"




const Header = () => {
 
  return (
    <div>
      <div className="flex justify-between bg-pink-700">
        <Comlogo className="w-10"></Comlogo>
        <Navitems></Navitems>
      </div>
    </div>
  );
};

const Comlogo = () => {
  return (
  <Link to={"/"}>
    <div>
      <img
        className="comlogo"
        src={comLogo}
      ></img>
    </div>
    </Link>
  );
};

const Navitems = () => {
  let initialVal = "Login";
  let newinitialval = "Logout";
  const [loginbuttonvar, setloginbuttonvar] = useState(initialVal);
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex">
      <ul>
        <li>Online Status : {onlineStatus ? "🟩" : "🟥"}</li>
        <li><Link to = "/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link>Cart</Link></li>
        <button
          onClick={() => {
            loginbuttonvar === "Login"
              ? setloginbuttonvar("Logout")
              : setloginbuttonvar("Login");
          }}
          className="loginBtn"
        >
          {loginbuttonvar}
        </button>
      </ul>
    </div>
  );
};

export default Header;
