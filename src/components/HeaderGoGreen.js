import { useState } from "react";
import { HEADER_IMG } from "../helpers/constants";
import { Link } from "react-router-dom";

const HeaderGoGreen = () => {
  const [toggleLogin, setToggleLogin] = useState("Login");
  return (
    <div className="go-green-header">
      <div>
        <img src={HEADER_IMG} alt="logo" style={{ width: "100px" }}></img>
      </div>
      <div className="nav-items">
        <ul className="items">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact us{" "}
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="toggle-login"
            onClick={() => {
              toggleLogin === "Login"
                ? setToggleLogin("Logout")
                : setToggleLogin("Login");
            }}
          >
            {" "}
            {toggleLogin}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default HeaderGoGreen;