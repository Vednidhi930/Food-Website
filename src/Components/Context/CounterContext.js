import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";


const CountContext=createContext();

const Counter=({children})=>{

    const {isAuthenticated} = useAuth0();


    const[cartCounter,setCartCounter]=useState(0);

    const handleIncrease=()=>{
       // setCartCounter(cartCounter+1)
    {isAuthenticated ? setCartCounter(cartCounter+1): toast.error("LOGIN FIRST") }
    }

    
  useEffect(()=>{
    toast.success("Item Added to Cart")
 },[cartCounter])
    


    return <CountContext.Provider value={{cartCounter,setCartCounter,handleIncrease}}>
         {children}
    </CountContext.Provider>
}

const MyContext=()=>{

    return useContext(CountContext);
}

export{MyContext,Counter};