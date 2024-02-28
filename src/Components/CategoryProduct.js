import React, { useEffect } from 'react'
import "./CategoryProduct.css";
import foods from './MyData/Data';
import FoodCategory from './FoodCategory';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CategoryProduct = () => {
    // console.log(foods);
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const notify = () => toast("Wow so easy!");

    useEffect(()=>{
      <ToastContainer/>
    },[])

    
  
  return (
    <>
     <div className='container-fluid  my-2 p-3'>
         <div className='row d-flex flex-column'>
          <h1 className='text-bold text-center'>What's on your Mood ? </h1>
         <Slider {...settings}>

              {
                 foods.map((curr,i)=>{
                    return <FoodCategory key={i} product={i}{...curr}/>
                })

                
              }
          </Slider>
    

         </div>
     </div>
    </>
  )
}

export default CategoryProduct
