import { render } from "@testing-library/react";
import { Sum } from "../Sum";
import { screen } from "@testing-library/react";
import RestaurantMenuShimmer from "../RestaurantMenuShimmer";

import '@testing-library/jest-dom';

import Shimmer from "../Shimmer";



test("sum function should calculate the sum of two numbers", ()=>{
    const result  = Sum(3,4);

    expect(result).toBe(7)
})


test("Checking the headings in About", () => {
    render(<RestaurantMenuShimmer />);
  
   
    const divs = screen.getAllByRole("heading");
  
   
    expect(divs.length).toBeGreaterThan(0);
  
    
  });

 