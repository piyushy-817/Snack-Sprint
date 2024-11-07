import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider , Outlet, } from "react-router-dom";
import Errorpge from "./src/Components/Error";
import "./index.css";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import Footer from "./src/Components/Footer";
import Contact from"./src/Components/Contact";
import About from "./src/Components/About";
import RestaurantMenu from "./src/Components/RestaurantMenu";



const Mainapp = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
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
        element: <About mamle="hii ia ma mamle"></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },{
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Errorpge></Errorpge>,
  },
]);

const rooting = ReactDOM.createRoot(document.getElementById("root"));
rooting.render(<RouterProvider router={Mainroute} />);
