import React from 'react'
import "./OurDelivery.css"
import ShoutImages from "../Components/Images/shoutTwophone.webp"

const OurDelivery = () => {
  return (
    <>
      <h4 className='text-center my-5 text-bold'>Quick Delivery App</h4>

      <div className='conatiner-fluid'>
         <div className='row d-flex justify-content-center'>
            <div className='col-lg-5 d-flex justify-content-end my-2 p-2'>
                 <img src={ShoutImages} alt='TwoPhoneImage' className='ShoutImage'/>
            </div>

            <div className='col-lg-3  d-flex flex-column justify-content-center my-2 align-items-center'>
                 <h3 className='text-success text-bold'>Get The App</h3>
                 <h1 className='text-center text-bold'>The Fastest Food Delivery In India</h1>
                 <button className='btn btn-dark'>Get Started</button>
            </div>
         </div>
      </div>
    </>
  )
}

export default OurDelivery
