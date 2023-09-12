import { DISH_URL } from "../utils/constants";
const RestaurantList = (props) => {
  const { item } = props;
  return (
      <div
        key={item.card.info.id}
        className="dish-details flex justify-between p-5 hover:border border-b-slate-400 cursor-pointer hover:scale-100"
      >
        {item.card.info.imageId ? (
          <img
            src={DISH_URL + item.card.info.imageId}
            alt="No image uploaded"
            className="dish-img w-3/12 m-auto p-5 hover:scale-125 "
          />
        ) : (
          <img alt="No preview available" className="dish-img" />
        )}
        <div className="flex-col justify-end w-9/12">
          <h4 className="font-bold">{item.card.info.name}</h4>
          <span className="font-semibold py-2 my-2">
            &#8377;{" "}
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </span>
          <p className="font-light text-sm">{item.card.info.description}</p>
        </div>
      </div>
  );
};
export default RestaurantList;
