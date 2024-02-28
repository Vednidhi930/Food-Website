import React from 'react'
import Allfood from "./MyData/FoodData"
import OurFood from './OurFood'

const MainFood = () => {

    console.log(Allfood);
  return (
    <>
      <>
       <div className='container-fluid'>
          <div className='row d-flex justify-content-between'>
               {
                Allfood.map((curr,i)=>{
                    return <OurFood food ={i} {...curr}/>
                })
               }
          </div>
       </div>
      </>
    </>
  )
}

export default MainFood
