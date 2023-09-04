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
     <div className="res-details">

      <h1>{restaurant.name}</h1>
      <p> {restaurant.cuisines.join(", ")}</p>
      <h6>
        <img className="rating-logo" src={RATING_URL} />{" "}
        {restaurant.avgRatingString}
        {" || " + restaurant.totalRatingsString}
      </h6>
      <h5>
        <img className="location-logo" src={LOCATION_URL} />
        {" " + restaurant.areaName + ", " + restaurant.city}
      </h5>
      <h5>{restaurant.costForTwoMessage}</h5>
     </div>
      <ul>
        {menuItems &&
          menuItems.map((obj,index) => {
            const { itemCards } = obj.card.card;
            return (
              <div key={index} className="menu-container">
                <h3>{obj.card.card.title}</h3>
                {itemCards &&
                  itemCards.map((items) => {
                    return (
                      <div key={items.card.info.id} className="dish-details">
                        {items.card.info.imageId? 
                        <img src= {DISH_URL+ items.card.info.imageId} alt="No image uploaded" className="dish-img"/>
                        :    
                        <img alt="No preview available" className="dish-img"/>
                    }
                        <h4 >{items.card.info.name}</h4>
                        <p>{items.card.info.description}</p>
                        <h6 style={{marginTop:"0px",marginBottom:"10px"}}>&#8377; {items.card.info.price/100 }</h6>
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
