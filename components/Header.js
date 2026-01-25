import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
const Header = ()=>{
    // Search bar
    // About us
    // Logo
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex place-content-between bg-pink-200 shadow-lg m-2 ">
           <div className="logo-container">
            <img className="w-50" src="https://i.pinimg.com/originals/a8/c0/9a/a8c09ae229e8ce7fdbf815282e68c893.jpg" alt="Img" />
           </div>
           <div className="flex items-center">
            <ul className="flex p-4 m-4 space-x-2.5  ">
                <li className="px-4">Status : {onlineStatus ? "✅" : "🛑"}</li>
                <li className="px-4" ><Link to = "/">Home</Link></li>
                <li className="px-4"><Link to = "/about">AboutUs</Link></li>
                <li className="px-4"><Link to = "/contact">Contact</Link></li>
                <li className="px-4"><Link to = "/Grocery">Grocery</Link></li>
                
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
}
export default Header;