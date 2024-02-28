import React from "react";
import "./OurFood.css";
import { MyContext } from "./Context/CounterContext";

const OurFood = (food) => {
  const { url, price, name } = food;

  const{handleIncrease}=MyContext();
  //console.log(url)
  return (
    <>
      <div className="col-lg-3 my-2 ourfood d-flex justify-content-center align-items-center">
        <img
          src={url}
          className="ourImg"
        />
      </div>

      <div className="col-lg-2 d-flex justify-content-center flex-column align-items-center">
         <h4 className="text-bold text-nowrap">{name}</h4>
         <h4 className="text-bold">{price}</h4>
         <button className="btn btn-dark" onClick={handleIncrease}>Add to cart</button>
      </div>
    </>
  );
};

export default OurFood;
