import { CARD_URL, LOCATION_URL, RATING_URL } from "../utils/constants";

const ProComponent = (props) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, areaName } =
    props?.res?.info;
  return (
    <div className="pro-card flex flex-wrap w-60 hover:border border-solid border-green-700 m-2 p-2 rounded-md bg-stone-50 hover:bg-slate-100">
      <img
        className="pro-logo "
        src={CARD_URL + cloudinaryImageId}
        alt="pro image"
      ></img>
      <h3 className="pro-name text-lg font-bold">{name}</h3>
      <h5 className="text-sm truncate">{cuisines.join(", ")}</h5>
      <div> 
        <h6 className="flex flex-wrap text-xs font-semibold items-baseline">
          {" "}
          <img className="location-logo w-3 h-3 mt-1" src={LOCATION_URL} />{" "}
          {areaName}
        </h6>
      </div>
      <h5 className="pro-price">{costForTwo}</h5>
      <h6 className="pro-rating flex items-baseline">
        <img className="rating-logo w-3 h-3 mt-1" src={RATING_URL} /> {avgRating}
      </h6>
    </div>
  );
};
export default ProComponent;
