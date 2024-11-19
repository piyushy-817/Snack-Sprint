import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../../utilities/appStore";
import RestaurantMenuData from "../../__mocks__/RestaurantMenuData.json";
import "@testing-library/jest-dom";
import CatogoryItemList from "../CatogoryItemList";
import { act } from "react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RestaurantMenuData),
  })
);

it("should add item in cart", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu></RestaurantMenu>
        
      </Provider>
    )
  );

  const RestaurantaccordionHeader = screen.getByText("Veg Pizza(14)");
  fireEvent.click(RestaurantaccordionHeader);

  const itemafterclicked = screen.getAllByTestId("itemList");
  expect(itemafterclicked.length).toBe(14);

  const addbtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addbtns[0]);
});

it("should chnge the cart no. of item added after click on item", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantMenu></RestaurantMenu>
        <Header></Header>
      </Provider>
      </BrowserRouter>
    )
  );


  const header = screen.getByText("1")
  expect(header).toBeInTheDocument()




});
