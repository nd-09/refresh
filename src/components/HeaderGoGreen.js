import { useContext, useState } from "react";
import { HEADER_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatusCheck from "../utils/helpers/useStatusCheck";
import UserContext from "../utils/helpers/UserContext";
import { useSelector } from "react-redux";

const HeaderGoGreen = () => {
  const [toggleLogin, setToggleLogin] = useState("Login");
  const status = useStatusCheck();
  const {userName,setUser}= useContext(UserContext)
  const cart = useSelector((store)=>store.cart.items)
  return (
    <div className="flex justify-between bg-green-100 m-1 items-center shadow-inner">
      <div>
        <img src={HEADER_IMG} alt="logo" style={{ width: "100px" }}></img>
      </div>
      <div className="flex ">
        <ul className="flex">
         {status ? <p className="mx-4"> Online Status: ✅</p> : <p className="mx-4"> Online Status: 🚫</p>}
          <li className="mx-4">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About us
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact us{" "}
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="/buyAndPlant"
              style={{ textDecoration: "none", color: "black" }}
            >
              Buy and Grow
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "black" }}
            >
              Cart({cart.length})
            </Link>
          </li>
          
          <button
            className="toggle-login mx-4 border border-solid border-lime-700 px-3 rounded  bg-green-400"
            onClick={() => {
              toggleLogin === "Login"
              ? setToggleLogin("Logout")
              : setToggleLogin("Login");
              setUser("Navdeep");
            }}
            >
            {" "}
            {toggleLogin}{" "}
          </button>
            <li className="font-mono font-semibold text-sm">{userName}</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderGoGreen;
