import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProComponent from "./ProComponent";
import ShimmerUI from "./ShimmerUi";
import SearchFilter from "./SearchFilter";
import { LISTING_URL } from "../utils/constants";

const GoGreenBody = () => {
  const [topRes, setTopRes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    listingData();
  }, []);
  const listingData = async () => {
    const response = await fetch(LISTING_URL);
    const listResponse = await response.json();
    setTopRes(
      listResponse?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFiltered(
      listResponse?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return !topRes || topRes.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body-contain">
      <div className="filter-container">
        <SearchFilter data={topRes} filterVal={(val) => setFiltered(val)} />

        <div className="filter">
          <button
            className="filter_btn"
            onClick={() => {
              const filtered = topRes.filter(
                (topRes) => topRes.info.avgRating > 4.3
              );
              setFiltered(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="pro-container">
        {filtered?.map((restaurant) => {
          return (
            <Link to={"/details/" + restaurant.info.id} key={restaurant.info.id} style={{ textDecoration: "none", color: "black" }}>
              <ProComponent res={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GoGreenBody;
