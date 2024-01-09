// Importing necessary dependencies and components
import { IMG_URL } from "../utilities/config";
import Shimmer from "./Shimmer";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {  REST_INFO_API_URL } from "../utilities/config";
import RestaurantCategory from "./RestaurantCategory";



// Defining the RestaurantInfo component
const RestaurantInfo = () => {
  
   // State variables using the useState hook to hold and update data
   const [resInfo,setResInfo] = useState(null);
   const [resMenu,setResMenu] = useState(null);
   const [resNewInfo, setResNewInfo] = useState(null);
   const [resCategory,setResCategory] = useState(null);
  const [showIndex,setShowIndex] = useState(null);



   // useParams hook to fetch dynamic parameters from the router child.
     const { resId } = useParams();
   
 // useEffect() hook to fetch the API after the component will load with a dependency array, it will render only once at the initial phase.
useEffect(()=>{
fetchInfo();
},[]);



//Async function to fetch restaurant information
const fetchInfo =  async () => {
  try {
    const data =  await fetch(REST_INFO_API_URL + resId);
    const json = await data.json();
    
    //Setting state variables with fetched data
    setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    
    setResNewInfo(json?.data?.cards[0]?.card?.card?.info?.labels[1]);
    
    setResInfo(json?.data?.cards[0]?.card?.card?.info);

    setResCategory(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
   
  } catch (error) {
    console.error("Error fetching restaurant information:", error);
  }

};
  
  // Before destructuring the data, we need to fetch it as we don't know how long it will take to fetch, and it will return undefined otherwise.
  if (resMenu === null) {
    return <Shimmer />
  };

  // Destructuring values from the fetched data
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId, locality, totalRatingsString, avgRatingString } = resInfo;
  const { lastMileTravelString, maxDeliveryTime } = resInfo?.sla;
  const { message } = resNewInfo;

  
//To find the Item categories from Swiggys API and stored in the variable.
const categories = resCategory;
// console.log(categories);

  // Rendering the JSX structure
  return (
    <div className="pages-container">

<div className="rest-menu">

{/* Top-Menu Section */}
        <div className="top-menu">
          <div className="top-menu-left">
            {/* Displaying the restaurant image */}
            <img src={IMG_URL + cloudinaryImageId} alt="Restaurant" />
          </div>
          <div className="top-menu-right">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")}</p>
            <p>{locality} - {lastMileTravelString}</p>
            <div className="top-menu-right-child">
              {/* Displaying restaurant ratings, delivery time, and cost for two */}
              <p style={avgRating > 3.8 ? { backgroundColor: "darkgreen" } : { backgroundColor: "rgb(164, 14, 14)" }}>
                <i className="ri-star-fill"></i>
                {avgRating}
              </p>
              <span>|</span>
              <p>{maxDeliveryTime}mins</p>
              <span>|</span>
              <p>{costForTwoMessage}</p>
            </div>
          </div>
          <div className="ratings-container">
            {/* Displaying restaurant ratings with an icon */}
            <button className="RestaurantRatings_wrapper" >
              <span className="RestaurantRatings_avgRating" >
                <span className="icon-star"></span>
                <span><i className="ri-star-fill"></i>{avgRatingString}</span>
              </span>
              <span className="RestaurantRatings_totalRatings" >{totalRatingsString}</span>
            </button>
          </div>
        </div>


{/*  Main-Menu Categories Accordions added with the component*/}
 {/* Introduced Controlled and uncontrolled Components  In this code , The parent is controlling over on child component*/}
{categories.map ((category,index)=>(
  //Controlled component:-
  <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
showItems={index === showIndex ? true : false}
//`showTheIndex` is a prop that you pass to the RestaurantCategory component. It is a function that presumably handles the toggling of the accordion's visibility.
//`showTheIndex` function uses the callback version of setShowIndex to toggle the state based on the current state. 
//This ensures that clicking on an already expanded accordion collapses it. 
showTheIndex={()=>{
//`setShowIndex()` This is the state-setting function which is provided by `React hooks` `useState` hook,It is used to update the state .
//`prevIndex` This is a parameter of the arrow function,representing the current value of `showIndex` state
  //This expression determines the new state value for showIndex based on the current state (prevIndex) and the index of the accordion.
  //This is a conditionally ternary expression. if the current accordion index `prevIndex` is equal to the index clicked accordion `index`
  //it means the accordion is already open, so set the state to null (close the accordion).
  //if they are not equal, set the state to the index of the clicked accordion (open the accordion).
setShowIndex((prevIndex)=>(prevIndex === index ? null : index))
}
}/>)
)} 

{/* Bottom-Menu Section */}
        <div className="bottom-menu">
          <div className="RestaurantLicence_wrapper__4BYQV">
            <div className="RestaurantLicence_licence__Oo5_q" aria-hidden="true">
              {/* Displaying FSSAI image */}
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="FSSAI" className="RestaurantLicence_image__2-5G_" />
            </div>
            <div></div>
          </div>
          <div className="RestaurantFooterAddress_wrapper__16xqp" aria-hidden="true">
            <p className="RestaurantFooterAddress_name__deVKZ">{name}</p><br></br>
            <p>Outlet: {locality}</p><br></br>
            <div className="RestaurantFooterAddress_address__37uUA">
              <div className="icon-markerDark RestaurantFooterAddress_icon__2Kjdg"></div>
              <p>{message}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


// Exporting the RestaurantInfo component
export default RestaurantInfo;
