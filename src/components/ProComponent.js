import { CARD_URL, LOCATION_URL,RATING_URL } from "../helpers/constants";

const ProComponent = (props) => {
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId,areaName } = props?.res?.info;
    return (
      <div className="pro-card" >
        <img
          className="pro-logo"
          src={
            CARD_URL +
            cloudinaryImageId
          }
          alt="pro image"
        ></img>
        <h3 className="pro-name">{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <div >

        <h6> <img className="location-logo" src={LOCATION_URL} /> {areaName}</h6>
        </div>
        <h5 className="pro-price">{costForTwo}</h5>
        <h6 className="pro-rating"><img className="rating-logo" src={RATING_URL} />  {avgRating}</h6>
      </div>
    );
  };
  export default ProComponent;