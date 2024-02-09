import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utilities/useRestaurantList";
import useOnlineStatus from "../utilities/useOnlineStatus";
import NetworkStatus from "./NetworkStatus";
import { withPromotedLabel } from "./RestaurantCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const listOfRestaurants = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  const RestaurantPromotedLabel = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    setFilterRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleSearch = () => {
    const filterSearch = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
      res.info.cuisines.includes(searchText)
    );

    if (filterSearch.length === 0) {
      // Handle case when no restaurants match the search
    } else {
      setFilterRestaurants(filterSearch);
    }
  };

  const handleFastDeliveryCheck = () => {
    const fastDeliveryTime = listOfRestaurants.filter((res) => res.info.sla.deliveryTime <= 20);

    if (fastDeliveryTime.length > 0) {
      setFilterRestaurants(fastDeliveryTime);
    } else {
      toast.error("Sorry, no fast delivery restaurants available right now. Please check again later.");
    }
  };

  if (!onlineStatus) {
    return <NetworkStatus />;
  }

  if (!filterRestaurants?.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="description">
        <br />
        <h1>Explore the finest food and drinks in the city of PUNE</h1>
      </div>

      <div className="search-container">
        <div className="search-bar">
          <input
            className="input-bar"
            autoComplete="false"
            name="hidden"
            type="text"
            placeholder="Satisfy your hunger now !"
            id="searchInp"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              handleSearch();
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <div className="button-container">
            <button data-testid="clickSearchButton" id="searchBtn" onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path fill="#fc9a01" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="filter-Buttons rounded-lg hover:ring-offset-zinc-900">
        <button
          className="finder-btns"
          onClick={() => {
            const filteredLists = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setFilterRestaurants(filteredLists);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="finder-btns"
          onClick={() => {
            const findVegRestaurants = listOfRestaurants.filter((res) => res.info.veg === true);
            setFilterRestaurants(findVegRestaurants);
          }}
        >
          Pure Veg
        </button>

        <button className="finder-btns" onClick={handleFastDeliveryCheck}>
          Fast Delivery
        </button>
      </div>

      <div className="restaurant-container">
        {filterRestaurants?.map((restaurant) => (
          <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>
            {restaurant.info.veg ? (
              <RestaurantPromotedLabel restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
