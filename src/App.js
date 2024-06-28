import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import ResMenu from "./components/ResMenu";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Footer from "./components/footer";
import Cart from "./components/Cart";


const AppLayout = () =>{
    return(
        <Provider store={AppStore}>
            <div className="app">
                <Header/>
                <Outlet />
                <Footer/>
            </div>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<Aboutus/>,
            },
            {
                path:"/contact",
                element:<Contactus/>,
            },
            {
                path:"/restaurents/:resId",
                element:<ResMenu/>
            },
            {   
                path:"/Cart",
                element:<Cart/>
            }
        ],
    
    },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

