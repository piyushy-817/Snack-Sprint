
import { restMenuDataApi } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=>{

    const [menuData, setMenuData] = useState(null);

    
  
    useEffect(() => {
      fetchingMenuData();
    }, []);
  
    const fetchingMenuData = async () => {
      const data = await fetch(
        restMenuDataApi+ resId
      );
  
      const JSon = await data.json();
      
      setMenuData(JSon);
    };
  
   

   return menuData;
}

export default useRestaurantMenu


