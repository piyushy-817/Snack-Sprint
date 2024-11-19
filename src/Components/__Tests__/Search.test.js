import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import Maindata from "../../__mocks__/Maindata.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Maindata),
  })
);

describe("It tests that the search funtionality is working fine or not", () => {
  it("checking the search funtionality", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body></Body>
        </BrowserRouter>
      )
    );

    const searchbtn = screen.getByRole("button", { name: "Search" });
    
    

    const input = screen.getByTestId("inputArea")
    fireEvent.change(input, {target : {value : "pizza"}})
    
    fireEvent.click(searchbtn)
    const cards = screen.getAllByTestId("resCard")

    expect (cards.length).toBe(4)

  });
});


it("testing the luxury btn working or not",async ()=>{
    await act(async () =>
        render(
          <BrowserRouter>
            <Body listofdata={Maindata} />
          </BrowserRouter>
        )
      );
    
      const cardsbeforefilter = screen.getAllByTestId("resCard");
      expect(cardsbeforefilter.length).toBe(20);
    
      const luxurybtn = screen.getByRole("button", { name: "Luxury Restaurants" });
      fireEvent.click(luxurybtn);
    
      
        
      
    });