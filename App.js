import React, { Suspense } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router";
// import Grocery from "./components/Grocery";
const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout =()=>{
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    ) 
}
const appRoute = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/restaurant/:category",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/contact",
                element : <Contact />
            },{
                path : "/Grocery",
                element : <Suspense fallback={<h1>Page is about to load</h1>} ><Grocery/></Suspense>,
            }
        ]
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}></RouterProvider>);