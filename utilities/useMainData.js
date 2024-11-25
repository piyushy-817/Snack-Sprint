
import { useState, useEffect } from "react";

const useMainData = ()=>{
   
    const [listofdata, setData] = useState([]);

    

  
  
     useEffect(() => {
       fetchdata();
     }, []);
   
     const fetchdata = async () => {
       const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       );
        const myfetchedData = await data.json()
      
       
        
       setData(
         myfetchedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
         .restaurants
       );
     
         
       };  return listofdata;}

        

export default useMainData