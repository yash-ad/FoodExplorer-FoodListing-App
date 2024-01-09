import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy,Suspense } from "react";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utilities/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";
import CartStore from "./components/CartStore";
import EmptyCart from "./components/EmptyCart";
import User from "./components/User";
import Shimmer from "./components/Shimmer";


// Define the layout of the entire application
const AppLayout = () => {
  const[userName,setUserName] = useState();

  //For-Authentication
useEffect(()=>{
const data = {
  Name:"",
}
setUserName(data.Name)
},[])


  return (

    // React-redux
<Provider store={appStore}>
    {/* //React-context */}
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="App-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

//In React, the lazy function is used to dynamically import a component. 
const About = lazy(()=> import("./components/About"));

const Contact = lazy(()=> import("./components/Contact"));

const User = lazy(()=> import("./components/User"));

// Create a router for the application using react-router-dom
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />}, 
      { path: "/restaurants/:resId", element: <RestaurantInfo /> },
      //<Suspense> is a React component that is used for handling components with asynchronous behavior, such as lazy-loaded components or data fetching.
      { path: "/about", element: <Suspense fallback={<Shimmer/>}><About/></Suspense> },
      { path: "/contact", element:<Suspense fallback={<Shimmer/>}><Contact/></Suspense>},
      { path: "/cart", element: <CartStore/>},
      { path: "/", element: <EmptyCart/>},
      { path: "/user", element: <Suspense fallback={<Shimmer/>}><User/></Suspense>},
    ],
  },
]);

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application inside the RouterProvider
root.render(<RouterProvider router={appRouter} />);
