import React, { useEffect, useState } from "react";
import "./SlidingImage.css";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";


const FoodImage = [
  {
    url: "https://www.pngarts.com/files/3/Food-Transparent-Image.png",
  },

  {
    url: "https://www.pngmart.com/files/23/Fast-Food-PNG-Clipart.png",
  },

  {
    url: "http://clipart-library.com/images_k/junk-food-transparent/junk-food-transparent-5.png",
  },
];

const SlidingImage = () => {

    const[slider,setSlider]=useState(0);


    const handelNext=()=>{
        slider===2 ? setSlider(0):setSlider(slider+1);
    }

    const handleprev=()=>{
        slider===0 ? setSlider(2):setSlider(slider-1);
    }

    useEffect(()=>{
       let automaticSlide= setInterval((handelNext),5000)

       return()=>{clearInterval(automaticSlide)};
      },[slider])

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center my-2">
            {
                FoodImage.map((curr,i)=>{
                    return<div key={i} className={i===slider ? "col-lg-11 herodiv my-2 p-2":"col-lg-11 removeImage my-2 p-2"}>
                    <img src={curr.url} className="slideImage"/>
                  </div>
                })
            }
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-lg-11 overlay d-flex justify-content-center align-items-center">
            <h4 className="text-lg-nowrap text-white">
              Welcome to the world of Tasty and Fresh Food
            </h4>
          </div>
        </div>

        <div className="left-right">
          <GrFormPreviousLink className="nextBtn" onClick={handleprev}  />
          <br></br>
          <GrFormNextLink className="prevBtn"  onClick={handelNext}/>
        </div>
      </div>
    </>
  );
};

export default SlidingImage;
