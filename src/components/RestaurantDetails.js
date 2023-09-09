import { DISH_URL, LOCATION_URL, MENU_URL, RATING_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUi";
import useFetchMenu from "../utils/helpers/useFetchMenu";

const RestaurantDetails = () => {
  const { restaurant_id } = useParams();
  const menu = useFetchMenu(restaurant_id);
  const restaurant = menu[0]?.card?.card?.info;
  const menuItems = menu[2]?.groupedCard.cardGroupMap?.REGULAR?.cards?.slice(1);
  return !menu || menu.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="res-details-container">
     <div className="res-details m-2 p-2 shadow-sm">

      <h1 className="text-3xl font-extrabold">{restaurant.name}</h1>
      <p className="text-md font-semibold"> {restaurant.cuisines.join(", ")}</p>
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
      <ul className="border border-solid border-black mx-5 px-5">
        {menuItems &&
          menuItems.map((obj,index) => {
            const { itemCards } = obj.card.card;
            return (
              <div key={index} className="menu-container">
                <h3 className="text-lg font-bold m-2 p-2 border border-b-black bg-orange-50">{obj.card.card.title}</h3>
                {itemCards &&
                  itemCards.map((items) => {
                    return (
                      <div key={items.card.info.id} className="dish-details p-5 hover:border border-solid border-black hover:scale-100">
                        {items.card.info.imageId? 
                        <img src= {DISH_URL+ items.card.info.imageId} alt="No image uploaded" className="dish-img w-64 m-5 p-5 hover:scale-125"/>
                        :    
                        <img alt="No preview available" className="dish-img"/>
                    }
                        <h4 className="font-bold" >{items.card.info.name}</h4>
                        <p>{items.card.info.description}</p>
                        <h6 className="font-semibold"style={{marginTop:"0px",marginBottom:"10px"}}>&#8377; {items.card.info.price/100 }</h6>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default RestaurantDetails;
