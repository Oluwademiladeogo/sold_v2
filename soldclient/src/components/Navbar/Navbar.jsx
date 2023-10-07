import { react, useState } from "react";
import "./Navbar.css";
const Navbar = (props) => {
  // const [token, setToken] = useState("")
  // setToken(props.token)
  const token = props.token;
  const buttonClickHandler = () => {
    console.log("clicked");
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="nav ">
        {token === "true" ? (
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
            <a className="nav__link">QUALITY SERVICES AND DELIVERY</a>
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
              DASHBOARD
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
            <a className="nav__link">QUALITY SERVICES AND DELIVERY</a>
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
