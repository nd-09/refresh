import React from "react";
import ReactDOM from "react-dom/client";
import { headerIMG } from "./assets/images.js";
import { resData } from "./helpers/apiData";
{
  /* this is your react element */
}
const elem = <h2>I am react element</h2>;
const Head = () => (
  <h1 className="child">Component composition using React Components</h1>
);
{
  /* And this is a react component */
}
const HeaderComponent = () => (
  <>
    <h1 className="parent">This is a React Functional component</h1>
    <Head />
    Haven't use this way of calling a react component(see the console) something
    that i didn't knew prior Now I know I know! ONE LEARNS NEW THING EVERYDAY.
    {console.log("{ Head() },", "One way to call react component")}
    {Head()}
    {elem}
  </>
);
const HeaderGoGreen = () => {
  return (
    <div className="go-green-header">
      <div>
        <img src={headerIMG} alt="logo" style={{ width: "100px" }}></img>
      </div>
      <div className="nav-items">
        <ul className="items">
          <li>Home</li>
          <li>Categories</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};
const GoGreenBody = () => {
  return (
    <div className="body-contain">
      <div className="search"> Search your choice...</div>
      <div className="pro-container">
        {resData.restaurants?.map((restaurant) => {
          return <ProComponent key={restaurant.info.id} res={restaurant} />;
        })}
      </div>
    </div>
  );
};
const ProComponent = (props) => {
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId,areaName } = props.res?.info;
  return (
    <div className="pro-card">
      <img
        className="pro-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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
const GoGreenComponent = () => {
  return (
    <>
      <HeaderGoGreen />
      <GoGreenBody />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<GoGreenComponent />);
