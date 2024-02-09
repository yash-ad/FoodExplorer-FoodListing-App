import { CDN_URL } from "../utilities/config";
import DisplayPromoted from "./DisplayPromoted";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, avgRating, costForTwo, areaName, cuisines, locality } = restaurantData?.info;
  const { slaString } = restaurantData?.info.sla;

  return (
    <div className="restaurant-list" data-testid="restaurantList">
      <div className="place">
        <div className="list-item">
          <div className="item-content">
            <div className="top-image">
              <img className="res-img" alt="Res-image" src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="place-name-div">
              <div className="name">{name}</div>
              <div className="food-list">{cuisines.slice(0, 4).join(' , ')}</div>
            </div>
            <div className="info-div">
              <div className="ratings"><span> <i className="ri-star-fill"></i> {avgRating}</span></div>
              <div className="dot">.</div>
              <div className="time">{slaString}</div>
              <div className="dot">.</div>
              <div className="price">{costForTwo}</div>
            </div>
            <div className="address">
              <span className="sNAfh">{locality} | {areaName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

export const withPromotedLabel = (OriginalComponent) => {
  return (props) => {
    return (
      <div>
        <DisplayPromoted />
        <OriginalComponent {...props} />
      </div>
    );
  };
};
