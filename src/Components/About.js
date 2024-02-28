import React from "react";
import zomato from "../Components/Images/zomatoAboutImage.avif";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8  my-2 p-2">
            <h2 className="text-bold">
              Driving the force of
              <span className="text-danger">assortement</span>
            </h2>
            <p className="text-wrap">
              For pver a decades now,we have been empowering our customers in
              discovering new tastes and experiences across countries.By putting
              together meticulous information for our cutsomers,we enable them
              to make an informed choice
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 p-2">
            <h1>Who are we ?</h1>
            <p>
              Launched in 2010, Our technology platform connects customers,
              restaurant partners and delivery partners, serving their multiple
              needs. Customers use our platform to search and discover
              restaurants, read and write customer generated reviews and view
              and upload photos, order food delivery, book a table and make
              payments while dining-out at restaurants. On the other hand, we
              provide restaurant partners with industry-specific marketing tools
              which enable them to engage and acquire customers to grow their
              business while also providing a reliable and efficient last mile
              delivery service. We also operate a one-stop procurement solution,
              Hyperpure, which supplies high quality ingredients and kitchen
              products to restaurant partners. We also provide our delivery
              partners with transparent and flexible earning opportunities.
            </p>
          </div>

          <div className="col-lg-4 zomatoImage">
            <img src={zomato} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
