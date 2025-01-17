import { Children } from "react";
import Footerpage from "../Footerpage";
import Bodypage from "./Bodypage";
import Navbarpage from "./Navbarpage";
import People from "./people";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Aboutuspage from "./Aboutuspage";
import Home from "./Home.jsx"


export default function (){
    const router = createBrowserRouter(
        [
          {
            path: '/',
            element: <Home/>,
            children: [
            
            
             
              {
                path: "/People",
                element: <People/>
              },
           
              {
                path:"/About us",
                element:<Aboutuspage/>
              },
             
             
            ]
        }
          
          
        
         
        ]
      )
    return (
        <>
        <Navbarpage/>
        <Outlet/>
        <Bodypage/>
        <Footerpage/>
        </>
    )
}