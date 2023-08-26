import { CARD_URL } from "../assets/images";

const ProComponent = (props) => {
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId,areaName } = props.res?.info;
    return (
      <div className="pro-card">
        <img
          className="pro-logo"
          src={
            CARD_URL +
            cloudinaryImageId
          }
          alt="pro image"
        ></img>
        <h3 className="pro-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h6>{areaName}</h6>
        <h5 className="pro-price">{costForTwo}</h5>
        <h6 className="pro-rating"> {avgRating}</h6>
      </div>
    );
  };
  export default ProComponent;