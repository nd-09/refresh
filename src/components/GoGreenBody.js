import { useState } from "react";
import { resData } from "../helpers/apiData";
import ProComponent from "./ProComponent";

const GoGreenBody = () => {
  const [topRes, setTopRes] = useState(resData.restaurants);
  return (
    <div className="body-contain">
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filtered = topRes.filter((topRes) => topRes.info.avgRating > 4.3);
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
