import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import UserContext from "./utilities/UserContext";
import appStore from "./utilities/appStore";
import CartStore from "./components/CartStore";
import EmptyCart from "./components/EmptyCart";
import Shimmer from "./components/Shimmer";
import NetworkStatus from "./components/NetworkStatus";
import useOnlineStatus from "./utilities/useOnlineStatus";

// Define the layout of the entire application
const AppLayout = () => {
  const [userName, setUserName] = useState();
  const appNetworkStatus = useOnlineStatus();

  // For Authentication
  useEffect(() => {
    const data = {
      Name: "",
    };
    setUserName(data.Name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <ToastContainer />
        <div className="App-container">
          {appNetworkStatus ? (
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          ) : (
            <NetworkStatus />
          )}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const UserLazy = lazy(() => import("./components/User"));

// Create a router for the application using react-router-dom
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/restaurants/:resId", element: <RestaurantInfo /> },
      { path: "/about", element: <Suspense fallback={<Shimmer />}><About /></Suspense> },
      { path: "/contact", element: <Suspense fallback={<Shimmer />}><Contact /></Suspense> },
      { path: "/cart", element: <CartStore /> },
      { path: "/empty-cart", element: <EmptyCart /> },
      { path: "/user", element: <UserLazy /> },
    ],
  },
]);

// Create a root for rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application inside the RouterProvider
root.render(<RouterProvider router={appRouter} />);
