import { react, reactRouter, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
// import BootstrapLinks from "../BootstrapLinks/BootstrapLinks";
import FontLinks from "../FontLinks/FontLinks";
const Navbar = (props) => {
  // const [token, setToken] = useState("")
  // setToken(props.token)
  const token = props.token;
  const buttonClickHandler = () => {
    console.log("clicked");
  };
  return (
    <nav>
      <FontLinks />
      <Link to="/" className="title">
        SOLD
      </Link>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        {/* <li>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="nav__search"
          ></input>
          <button
            type="submit"
            className="nav__button"
            onClick={buttonClickHandler}
          >
            <i className="fa fa-search" />
          </button>
        </li> */}
        <li>
          <NavLink to="/cart">cart</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Account</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
// react query
