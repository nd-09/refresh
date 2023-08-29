import { useEffect, useState } from "react";
import ProComponent from "./ProComponent";
import ShimmerUI from "./ShimmerUi";
import SearchFilter from "./SearchFilter";

const GoGreenBody = () => {
  const [topRes, setTopRes] = useState([]);
  const[filtered,setFiltered]=useState([]);
  useEffect(() => {
    listingData();
  }, []);
  const listingData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const listResponse = await response.json();
    setTopRes(
      listResponse?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFiltered(
      listResponse?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (!topRes || topRes.length === 0)? <ShimmerUI/> :(
    <div className="body-contain">
      <div className="filter-container">
      <SearchFilter data={topRes} filterVal={(val)=>setFiltered(val)}/>

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
          return <ProComponent key={restaurant.info.id} res={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default GoGreenBody;
