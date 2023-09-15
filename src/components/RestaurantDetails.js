import { LOCATION_URL, RATING_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUi";
import useFetchMenu from "../utils/helpers/useFetchMenu";
import RestaurantMenuAccordian from "./RestaurantMenuAccordian";
import { useState } from "react";

const RestaurantDetails = () => {
  const { restaurant_id } = useParams();
  const menu = useFetchMenu(restaurant_id);
  const [controlIndex, setControlIndex] = useState(0);
  const [toggle, setToggle] = useState(true);
  const restaurant = menu[0]?.card?.card?.info;
  const menuItems = menu[2]?.groupedCard.cardGroupMap?.REGULAR?.cards?.filter(
    (dish) =>
      dish.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return !menu || menu.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="res-details-container w-6/12 m-auto p-5">
      <div className="res-details m-2 p-2 shadow-sm">
        <h1 className="text-3xl font-extrabold">{restaurant.name}</h1>
        <p className="text-md font-semibold">
          {" "}
          {restaurant.cuisines.join(", ")}
        </p>
        <h6 className=" flex flex-wrap">
          <img className="rating-logo w-3 h-3 mt-1" src={RATING_URL} />{" "}
          {restaurant.avgRatingString}
          {" || " + restaurant.totalRatingsString}
        </h6>
        <h5 className="flex flex-wrap ">
          <img className="location-logo w-3 h-3 mt-1" src={LOCATION_URL} />
          {" " + restaurant.areaName + ", " + restaurant.city}
        </h5>
        <h5 className="font-semibold">{restaurant.costForTwoMessage}</h5>
      </div>
      <div className="border border-solid border-b-gray-100 p-2">
        {menuItems &&
          menuItems?.map((obj, index) => {
            return (
              <RestaurantMenuAccordian
                key={index}
                categories={[obj]}
                showList={index === controlIndex ? toggle : false}
                setControlIndex={() => setControlIndex(index)}
                setToggle={() => setToggle(!toggle)}
              />
            );
          })}
      </div>
    </div>
  );
};
export default RestaurantDetails;
