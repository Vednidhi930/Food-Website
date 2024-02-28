import React, { useEffect, useState } from "react";
import FoodLogo from "./Images/FoodNetwrok.png";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaDeleteLeft } from "react-icons/fa6";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { MyContext } from "./Context/CounterContext";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [mnav, setMnav] = useState(false);
  const { cartCounter } = MyContext();
  const { loginWithRedirect, logout, isAuthenticated,user} = useAuth0();


  return (
    <>
      <div className="container-fluid bgColor border-bottom border-dark  shadow">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-lg-1 col-1  d-flex justify-content-center">
            <img src={FoodLogo} alt="FoodMainLogo" className="FoodLogo" />
          </div>

          <div className="col-lg-7 col-7 Navbar-right">
            <ul className="d-flex justify-content-around align-items-center">
              <li className="my-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/About">About us</NavLink>
              </li>
              <li className="my-3">
                <NavLink to="/OurFood">Our Food</NavLink>
              </li>

           { isAuthenticated?  <div className="d-flex userDiv">
                   <FaRegUser className="userIcon"/>
                   <h4 className="my-1 ms-1">{user.name}</h4>
              </div>:null

            }
              {isAuthenticated ? (
                <button
                  className="btn btn-dark mt-1 loginBtn rounded-pill ps-2"
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  className="btn btn-dark mt-1 loginBtn rounded-pill ps-2"
                  onClick={() => loginWithRedirect()}
                >
                  LOGIN
                </button>
              )}
              <RxHamburgerMenu className="threeLineIcon mt-3" onClick={() => setMnav(!mnav)}/>
              <div>
                <FaCartShopping className="CartIcon mt-3" />
                <span className="cartCounter">{cartCounter}</span>
              </div>
            </ul>
          </div>
        </div>
      </div>

      {mnav === true ? (
        <div className="MobileNav">
          <FaDeleteLeft className="DeleteIcon" onClick={() => setMnav(false)} />
          <ul className="d-flex flex-column align-items-center my-5 gap-2">
            <li className="mt-3">
              <NavLink
                to="/"
                className="text-nowrap"
                onClick={() => setMnav(!mnav)}
              >
                Home
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                to="/About"
                className="text-nowrap"
                onClick={() => setMnav(!mnav)}
              >
                About Us
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                to="/OurFood"
                className="text-nowrap"
                onClick={() => setMnav(!mnav)}
              >
                Our Food
              </NavLink>
            </li>
            <FaCartShopping className="MobileCartIcon mt-4" />
            <button
              className="btn btn-dark mt-4 loginBtn"
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </button>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
