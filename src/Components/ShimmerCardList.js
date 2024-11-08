import Shimmer from "./Shimmer";
import React from "react";

const ShimmerCardList = () => {
    return (
      <div className="flex flex-wrap pl-36 ">
        {Array.from({ length: 20 }).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  };
  
  export default ShimmerCardList;