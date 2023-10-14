import { react, useState } from "react";
import "./Navbar.css";
import FontLinks from "../FontLinks/FontLinks";
const Navbar = (props) => {
  // const [token, setToken] = useState("")
  // setToken(props.token)
  const token = props.token;
  const buttonClickHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <FontLinks />
      <div className="nav ">
        {token === "true" ? (
          <div>
            <a className="nav__link__sold">SOLD</a>
            <a href="#" className="nav__link">
              HOME
            </a>

            {/* <a className="nav__link">QUALITY SERVICES AND DELIVERY</a> */}
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
              {/* <i className="fa fa-search" /> */}
            </button>
            <a href="#" className="nav__link">
              CART
            </a>
            <i class="fa-regular fa-user fa-2xs"></i>
            <a href="#" className="nav__link">
              CONTACT
            </a>
            <a href="#" className="nav__link">
            <i className="fa-solid fa-user-lock fa-2xs"></i>
            </a>
            <a href="#" className="nav__link">
              LOGOUT
            </a>
          </div>
        ) : (
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //
          //Space added for code readability
          //
          //
          //
          <div>
            <a className="nav__link__sold">SOLD</a>
            <a href="#" className="nav__link">
              HOME
            </a>
            <a href="#" className="nav__link">
              ABOUTUS
            </a>
            <a href="#" className="nav__link">
              CART
            </a>
            {/* <a className="nav__link">QUALITY SERVICES AND DELIVERY</a> */}
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
            <a href="#" className="nav__link">
              REGISTER
            </a>
            <a href="#" className="nav__link">
              SIGNUP
            </a>
          </div>
        )}
        {/* might want to do categories later */}
        {/* isauth  */}
      </div>
    </>
  );
};
export default Navbar;
// react query
