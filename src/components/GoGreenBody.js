import { useEffect, useState } from "react";
import ProComponent from "./ProComponent";
import ShimmerUI from "./ShimmerUi";

const GoGreenBody = () => {
  const [topRes, setTopRes] = useState([]);
  useEffect(() => {
    listingData();
  }, [topRes]);
  const listingData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const listResponse = await response.json();
    setTopRes(
      listResponse?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (!topRes || topRes.length === 0 ) {
      return <ShimmerUI/>
  }
  return (
    <div className="body-contain">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filtered = topRes.filter(
              (topRes) => topRes.info.avgRating > 4.3
            );
            setTopRes(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="pro-container">
        {topRes?.map((restaurant) => {
          return <ProComponent key={restaurant.info.id} res={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default GoGreenBody;
