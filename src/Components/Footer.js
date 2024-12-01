import COmLogo from "../../utilities/com_logo.png";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div>
      <div  className="align-middle text-center justify-center h-60 dark:bg-customLight  bg-red-400 shadow-inner">
        <div className="  p-12 text-center  text-slate-100 font-manrope text-2xl">Get More Offers, To get the best Taste in Town</div>
        <button className= " h-10 w-44 text-slate-500 bg-white py-1 px-2 mr-4 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-red-300 border-double border-4 border-red-100 items-center rounded-xl active:bg-red-400 hover:text-white  cursor-pointer">Offers</button>
      </div>

      <div className=" items-center dark:bg-slate-700 dark:text-white  space-x-80  p-10 pt-30 flex">
        <div className=" items-center">
          <img className="w-40" src={COmLogo}></img>
          <div className=" mt-2 text-2xl">
            <span className="text-3xl text-red-600 font-bold font-charm ">
              Snack
            </span>{" "}
            <span className="text-slate-700 dark:text-slate-400">Sprint</span>{" "}
          </div>
          <p className="mt-4 text-center w-80 text-wrap">
            Sprint Snack is a fast and convenient food delivery app designed to
            bring delicious meals to your doorstep with just a few taps. Whether
            you're craving comfort food, a healthy meal, or a late-night snack,
            Sprint Snack connects you with local restaurants and top-rated
            eateries to satisfy your hunger quickly. With real-time tracking,
            personalized recommendations, and easy payment options, Sprint Snack
            makes ordering food a seamless and enjoyable experience.
          </p>


          <div className="ml-20 items-center mt-4 flex space-x-3 text-xl">
          <FaFacebook className=" cursor-pointer text-3xl" ></FaFacebook>
          <FaInstagram className=" cursor-pointer text-3xl" ></FaInstagram>
          <FaTwitter className=" cursor-pointer text-3xl" ></FaTwitter>

          </div>



          </div>
          

        <div className="mt-44">
          <h4 className="text-slate-500 font-manrope font-bold text-2xl">
            Features
          </h4>
          <ul className=" space-y-6 mt-4">
            <li className="cursor-pointer">Fast Delivery</li>
            <li className="cursor-pointer">Free Delivery if late</li>
            <li className="cursor-pointer">Guranteed Hot and tasty</li>
            <li className="cursor-pointer">Easy To use app</li>
            <li className="cursor-pointer">24x7 Service</li>
          </ul>
        </div>

        <div className="mt-44">
          <h4 className="text-slate-500 font-manrope font-bold text-2xl">
            About us
          </h4>
          <ul className="  mt-4">
            <li className="cursor-pointer my-4">Career</li>
           <Link to="/About"> <li className="cursor-pointer my-4">About Us</li></Link>
            <Link to="/Contact"><li className="cursor-pointer my-4">Contact Us</li></Link>
            <li className="cursor-pointer my-4">Become a Partner</li>
          </ul>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
