import React, { useContext, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { Product } from '../Utils/Context'




const Cards = () => {
  const x=useContext(Product);
  // console.log(x);
  
 
  
  return (
    <>
     <Navbar/>
      
       

      <div className='w-[88%] bg-zinc-100 content-start overflow-x-hidden overflow-y-auto h-full pl-5 pt-8 flex flex-wrap gap-5'>
           
           {x.map((it)=>(<Link  key={it.id} className='  block w-[18%] h-[40%]' to={`/details/${it.id}`}> <Card data={it} /> </Link>))}
      </div>
    
     
     

     


    </>
    )
}

export default Cards;