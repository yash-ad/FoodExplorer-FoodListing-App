import { CORS_URL } from "./config";
import { API_URL } from "./config";
import { useState,useEffect } from "react";


const useRestaurantList = ()=>{
// State variables using the useState hook
const [listOfRestaurants, setlistOfRestaurants] = useState([]);


// useEffect hook to fetch data when the component mounts
useEffect(() => {
  fetchData();
}, []);

// Async function to fetch restaurant data
const fetchData = async () => {
 
    // Fetching data from the specified API
    const data = await fetch(CORS_URL + API_URL);
    
    const json = await data.json();

    // Setting the state variables with restaurant data
    setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
 
};


return listOfRestaurants;
   
};

export default useRestaurantList;