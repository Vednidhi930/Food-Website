import React from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-lg-3  my-3">
            <div className="brandLocation p-2 d-flex">
              <IoLocationOutline className="locationIcon text-white my-1" />
              <h3 className="text-white my-1">The Menu</h3>
            </div>

            <div className="d-flex">
              <FaRegCopyright className="copyright text-white my-1" />
              <p className="text-white my-1">2023 Bundi Technologies pvt Ltd</p>
            </div>
          </div>

          <div className="col-lg-3  my-3 companySection">
            <h2 className="text-white">Company</h2>
            <ul>
              <li className="text-white fs-3 my-3 ">
                <a>About</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Career</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Team</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Menu One</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Menu Instamart</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Menu Genie</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3  my-3 companySection">
            <h2 className="text-white">Contact Us</h2>
            <ul>
              <li className="text-white fs-3 my-3 ">
                <a>Help & Support</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Partner With Us</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Ride with Us</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 my-3 companySection">
            <h2 className="text-white heading2">Legal</h2>
            <ul>
              <li className="text-white fs-3 my-3 ">
                <a>Terms & Conditions</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Cookie Policy</a>
              </li>
              <li className="text-white fs-3 my-3 ">
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
