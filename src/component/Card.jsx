import React, { useContext } from 'react'
import { Product } from '../Utils/Context'

const Card = ({data}) => {
  
  
  
 

  
  return (
    <div className='w-full h-full overflow-hidden rounded-md  bg-zinc-200 flex  flex-col items-center '>
          <div className='w-[60%] h-[75%] mt-5 hover:scale-110 mb-2'>
            <img className='w-full h-full ' src={data.image} alt="" />
          </div>
          <h1 className='text-xl'>{data.title}</h1>
        </div>
  )
}

export default Card