import React from "react";
import "./FoodCategory.css";
import { MyContext } from "./Context/CounterContext";
  


const FoodCategory = (product) => {
  const{name,price,url}=product
  const{handleIncrease}=MyContext();


  return (
    <>
      <div className="col-lg-6 my-3 myDiv border border-dark rounded-circle d-flex justify-content-center align-items-center">
        <img
          src={url}
          className="food rounded-circle"
          alt="Food"
        />
      </div>

      <div className="col-lg-2 d-flex flex-column align-items-center detailDiv">
        <h4 className="text-bold my-2 text-nowrap">{name}</h4>
        <h3 className="text-bold my-2 text-nowrap">{price}</h3>
        <button className="btn btn-dark text-nowrap" onClick={handleIncrease}>Add to Cart</button>
      </div>
    </>
  );
};

export default FoodCategory;
