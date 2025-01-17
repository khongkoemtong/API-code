import Under from "../../Under";
import Footerpage from "../Footerpage";
import Bodypage from "./Bodypage";
import Navbarpage from "./Navbarpage";

import { createBrowserRouter, Outlet } from "react-router-dom";


export default function (){
  
    return (
        <>
        <Navbarpage/>
        <Outlet/>
        <Bodypage/>
        <Footerpage/>
        <Under/>
        </>
    )
}