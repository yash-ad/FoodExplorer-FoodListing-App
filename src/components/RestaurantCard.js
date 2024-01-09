// Importing necessary dependencies
import { CDN_URL } from "../utilities/config";
import DisplayPromoted from "./DisplayPromoted";

// Defining the RestaurantCard component
const RestaurantCard = (props) => {
  // Destructuring the props to get the restaurantData object
  const { restaurantData } = props;
  
  

  // Destructuring values from the restaurantData object
  const { name, cloudinaryImageId, avgRating, costForTwo, areaName, cuisines, locality } = restaurantData?.info;
  const { slaString } = restaurantData?.info.sla;
  
  return (
    <div className="restaurant-list" data-testid="restaurantList">
      <div className="place">
        <div className="list-item">
          <div className="item-content">
            <div className="top-image">
              {/* Displaying the restaurant image using CDN_URL and cloudinaryImageId */}
              <img className="res-img" alt="Res-image" src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="place-name-div">
            <div className="name">{name}</div>

            {/* Here i have used `slice()` method to limit the number of displayed cuisines and here i want to add cuisines only few 3 to 4
            Here, the slice(0, 4) method is used to get only the first 4 elements from the cuisines array. This way, you'll only display up to 4 cuisines, making the component less wide. If there are fewer than 4 cuisines, it will display all of them. */}
            
            <div className="food-list">{cuisines.slice(0,4).join(' , ')}</div>
          </div>
          <div className="info-div">
            {/* Displaying ratings, delivery time, and cost for two */}
            <div className="ratings"><span> <i className="ri-star-fill"></i> {avgRating}</span></div>
            <div className="dot">.</div>
            <div className="time">{slaString}</div>
            <div className="dot">.</div>
            <div className="price">{costForTwo}</div>
          </div>
          <div className="address">
            {/* Displaying locality and areaName */}
            <span className="sNAfh">{locality} | {areaName}</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the RestaurantCard component
export default RestaurantCard;


//Higher order component:-

export const withPromotedLabel = (RestaurantCard)=>{
return(props)=>{
return (
<div>
{/* Implemneted the `<DisplayPromoted/>` directly into the Higher order component which displays the `PROMOTED` label on the restaurants cards. */}
<DisplayPromoted/>
{/* //Using spread operator all the props that i have recieved from */}
<RestaurantCard {...props}/> 
</div>
);

};

};
