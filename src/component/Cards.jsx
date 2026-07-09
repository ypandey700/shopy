import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { Product } from '../Utils/Context'
import axios from '../Utils/axios'




const Cards = () => {
  const {data}=useContext(Product);
  const x=data;
  // console.log(x);
  x.filter
  const {search}=useLocation();
  const [,Url]=search.split('=');
  const categoryUrl=decodeURIComponent(Url);
  // console.log(categoryUrl);
  
  const [singlecat, setsinglecat] = useState(x);

  const getSingleCat= async ()=>{
    try{
    const {data}=await axios.get(`products/category/${categoryUrl}`);
    // console.log("inside");
    
    } 
  catch (error) {
    console.log(error);
    }
  }

  useEffect(()=>{
    
    if(categoryUrl!='undefined') {
      // getSingleCat();
      setsinglecat(data.filter((p)=>p.category==categoryUrl))

    }
    else setsinglecat(x)
  },[categoryUrl,x])
  
//  console.log(singlecat);
 
  
  return (
    <>
     <Navbar/>
    <div className='w-[88%] bg-zinc-100 content-start overflow-x-hidden overflow-y-auto h-full pl-5 pt-8 pb-5 flex flex-wrap gap-5'>
          {singlecat.map((it)=>(<Link  key={it.id} className='  block w-[18%] h-[42%]' to={`/details/${it.id}`}> <Card data={it} /> </Link>))}
    </div>
    </>
    )
}

export default Cards;