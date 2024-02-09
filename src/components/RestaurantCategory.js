import React from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  const { data, showItems, showTheIndex } = props;

  const handleClick = () => {
    showTheIndex();
  };

  return (
    <div>
      <li>
        <div className="main-menu">
          <div className="category-items">
            <div className="Accordions-header" onClick={handleClick}>
              <h1 className="menu-title">
                {data.title}
                <span>({data.itemCards.length})</span>
              </h1>
              <span className="arrow-symbol">
                <span className="material-symbols-outlined">
                  expand_more
                </span>
              </span>
            </div>
            {showItems && (
              <div className="Accordions-body">
                <ItemsList items={data.itemCards} />
              </div>
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default RestaurantCategory;
