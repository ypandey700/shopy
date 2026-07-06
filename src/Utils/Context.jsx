import React, { useEffect } from 'react'
import { createContext } from 'react'
import { useState } from 'react';
import axios from '../Utils/axios';
export const Product=createContext();
const Context = (prop) => {
    const[data,setData]=useState([]);
    const getprod= async ()=>{
      try{
            const x=await axios.get('/products')
            // console.log(x)
            setData(x.data)
    }
      catch{
        console.log("error")

        

      }
    }
    useEffect(()=>{
      getprod();
    },[])
 
  return (
    <Product.Provider value={data}>{prop.children}</Product.Provider>
  )
}

export default Context