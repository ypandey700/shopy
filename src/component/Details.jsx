import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../Utils/Context';

const Details = (prop) => {
    const {id}=useParams();
    
    const x=useContext(Product);
    const data=x.filter((it)=>(id==it.id))
    console.log(data[0].description)
    
    
    
   
  return (
    <div className='w-[80%] h-screen bg-gray-300 m-auto '>

        <div className='w-full h-full flex  items-center '>
            <div className=' w-[40%] overflow-hidden h-[60%] '>
                <img className='w-full h-full object-contain' src={data[0].image} alt="" />
            </div>
            <div className=' w-[40%] h-[60%] pl-10 flex flex-col items-start'>
                <h1 className='text-5xl mb-1 line-clamp-3 overflow-hidden'>{data[0].title}</h1>
                <h3 className='text-3xl mb-8 opacity-50'>{data[0].category}</h3>
                <h2 className='text-2xl mb-3 font-semibold'>$ {data[0].price}</h2>
                <p className='text-xl mb-10 line-clamp-6 '>{data[0].description}</p>
                <div className='flex gap-20'>
                     <button className='px-10 py-5 bg-blue-500 rounded-md'>Button 1</button>
                     <button className='px-10 py-5 bg-blue-500 rounded-md'>Button 1</button>

                </div>
               
                <button></button>
            </div>
        </div>
        
        

    </div>
  )
}

export default Details