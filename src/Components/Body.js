import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import Restcard from "./RestCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import useMainData from "../utilities/useMainData";

const Body = () => {
 /* const [listofdata, setData] = useState([]);*/
  const [searchText, setsearchText] = useState("");
  const [filteredarray, setfilteredarray] = useState([])

  
  
 /* useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const myfetchedData = await data.json();*/
   
    
   /* setData(
      myfetchedData.data.cards[1].card.card.gridElements.infoWithStyle
      .restaurants
    );*/
    
      debugger;
    
 
    const listofdata = useMainData()
    console.log(listofdata)

    const onlineStatus = useOnlineStatus()
    if (onlineStatus === false ) return  <h1>It seems like you are not online</h1>
    useEffect(() => {
      if (listofdata && listofdata.length > 0) {
        setfilteredarray(listofdata);
      }
    }, [listofdata]);
  
    // Show shimmer while data is loading
    if (!listofdata || listofdata.length === 0) {
      return <Shimmer />;
    }
  
  return (
    <div className="body">
      <div className="searching-container">
        <input className="inputText" value={searchText} onChange={(e)=>{
           setsearchText(e.target.value)
        }}></input>
        <button onClick={()=>{
         
           let filteredData2 = listofdata.filter((res)=>{
             return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            
          });
          setfilteredarray(filteredData2);
        }} className="searchBtn">Search</button>

        <button
          onClick={() => {
            const filteredData = listofdata.filter((res) => {
              const costForTwo = parseInt(res.info.costForTwo.slice(1, 4), 10); // Convert the sliced string to a number
              console.log(costForTwo); // Log to check the extracted value
              return costForTwo >= 500;
            });

            setfilteredarray(filteredData);
          }}
          className="search"
        >
          Luxury Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredarray.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}> 
          <Restcard
            
            myfetchedData={restaurant}
          ></Restcard></Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
