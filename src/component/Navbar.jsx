import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Product } from '../Utils/Context'
import axios from '../Utils/axios';


const Navbar = () => {
  let {data}=useContext(Product);
  const pro=useContext(Product);
  data=data.reduce((acc,cur)=>[...acc,cur.category],[])
  data=[...new Set(data)]
  // console.log(data);

  const setColour = () => {
  return `rgba(
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    0.5
  )`;
};


  return (
    <nav className='w-[16%] h-screen   bg-gray-300'>
      <div className='flex flex-col items-center'>
         <Link className='border m-4  px-6 py-3' to={'/create'}>Add Product</Link>
        <hr className='w-[80%]' />
      </div>
      <div className='mx-5'>
         <h1 className='text-2xl font-bold mt-2 mb-2 '>Category Filter </h1>
        <div className='flex flex-col items-start flex-nowrap '>
          {data.map((it,k)=> <Link key={k} to={`?category=${it}`} className='text-lg line-clamp-1'><span style={{ backgroundColor: setColour()}} className='w-3.75 h-3.75 mr-3  inline-block rounded-full'></span>{it.toUpperCase()}</Link>)}
        </div>
      </div>

       
       
      </nav>
  )
}

export default Navbar