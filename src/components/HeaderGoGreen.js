import { HEADER_IMG } from "../assets/images";

const HeaderGoGreen = () => {
    return (
      <div className="go-green-header">
        <div>
          <img src={HEADER_IMG} alt="logo" style={{ width: "100px" }}></img>
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
  export default HeaderGoGreen;