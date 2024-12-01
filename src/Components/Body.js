import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Restcard, { promotedRestCard } from "./RestCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utilities/useOnlineStatus";
import useMainData from "../../utilities/useMainData";
import ShimmerCardList from "./ShimmerCardList";
import { PromotedRestCard } from "./RestCard";
import { GiNightSleep } from "react-icons/gi";
import { GoSun } from "react-icons/go";
import { toggleTheme } from "../../utilities/themeSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



const Body = () => {
  
  const [searchText, setsearchText] = useState("");
  const [filteredarray, setfilteredarray] = useState([]);
     
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    // Toggle the dark class on the <html> element
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };
  

  const NewdRestCard = PromotedRestCard(Restcard);

  const listofdata = useMainData();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>It seems like you are not online</h1>;
  useEffect(() => {
    if (listofdata && listofdata.length > 0) {
      setfilteredarray(listofdata);
    }
  }, [listofdata]);

  if (filteredarray.length === 0) {
    return <ShimmerCardList />;
  }
  

  return (
    
      <div className={`${isDarkMode ? "bg-gray-700" : "bg-white"} flex-grow`}>
        <div>
          <input
            data-testid="inputArea"
            className="border-slate-300 focus:outline-none placeholder:italic placeholder:text-slate-400 m-4 rounded-lg shadow-md p-1 outline-slate-400 text-slate-500 px-4"
            placeholder="Search for Restaurant..."
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            onClick={() => {
              let filteredData2 = listofdata.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredarray(filteredData2);
            }}
            className={`${isDarkMode ? "text-white" : "text-slate-500"} text-slate-500 py-1 px-2 mr-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 border-double border-4 border-red-100 items-center rounded-xl active:bg-red-400 hover:text-white cursor-pointer`}
          >
            Search
          </button>
    
          <button
            onClick={() => {
              const filteredData = listofdata.filter((res) => {
                const costForTwo = parseInt(res.info.costForTwo.slice(1, 4), 10);
                return costForTwo >= 500;
              });
              setfilteredarray(filteredData);
            }}
            className={`${isDarkMode ? "text-white" : "text-slate-500"} text-slate-500 py-1 px-2 mr-4 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-red-300 border-double border-4 border-red-100 items-center rounded-xl active:bg-red-400 hover:text-white cursor-pointer`}
          >
            Luxury Restaurants
          </button>
    
          <button
            className="rounded-full p-2 shadow-lg ml-[1400px] bg-red-100"
            onClick={handleThemeToggle}
          >
            {isDarkMode ? (
              <div className="text-3xl">
                <GoSun />
              </div>
            ) : (
              <div className="rounded-full text-3xl">
                <GiNightSleep />
              </div>
            )}
          </button>
        </div>
    
        <div className="justify-between">
          <span className="ml-20 mt-20 dark:text-white font-caveat underline-offset-0 text-5xl font-bold text-slate-500">
            Top Restaurants :{" "}
          </span>
        </div>
    
        <div className="mx-40 mt-20 flex flex-wrap justify-items-center">
          {filteredarray.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
              {restaurant.info.avgRating > 4.5 ? (
                <NewdRestCard myfetchedData={restaurant} />
              ) : (
                <Restcard myfetchedData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
    

  
};

export default Body;
