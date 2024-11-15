import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider , Outlet, } from "react-router-dom";
import Errorpge from "./src/Components/Errorpge";
import "./index.css";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import Contact from"./src/Components/Contact";
import About from "./src/Components/About";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import UserContext from "./utilities/UserContext";
import { Provider } from "react-redux";
import  appStore from "./utilities/appStore";
import Cart from "./src/Components/Cart";
import { useState } from "react";




const Mainapp = () => {

  
  return (
    <div className=" min-h-screen">
      <Provider store={appStore}>
      <UserContext.Provider value={{loginUserinfo : "Piyush_Yadav_"}}>
      <Header></Header>
      </UserContext.Provider>
      <Outlet ></Outlet>
      <Footer></Footer>
      </Provider>
    </div>
  );
};

const Mainroute = createBrowserRouter([
  {
    path: "/",
    element: <Mainapp></Mainapp>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },{
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },{
        path: "/cart",
        element: <Cart></Cart>,
      }
    ],
    errorElement: <Errorpge></Errorpge>,
    
  },
  
]);



const rooting = ReactDOM.createRoot(document.getElementById("root"));
rooting.render(<RouterProvider router={Mainroute} />);
