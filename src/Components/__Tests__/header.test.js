import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utilities/appStore";

test("login button in Header is rendering or not", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </Provider>
  );

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});


test("checking if clicking chnge login btn to logout", ()=>{
    render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header></Header>
          </BrowserRouter>
        </Provider>
      );

      const loginBtn = screen.getByRole("button" , {name: "Login"})

      fireEvent.click(loginBtn)
      const logoutBtn = screen.getByRole("button" , {name: "Logout"})

      expect(logoutBtn).toBeInTheDocument()
})