import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[12%] h-screen   bg-gray-300'>
      <div className='flex flex-col items-center'>
         <button className='border m-4 px-6 py-3'>Add Product</button>
        <hr className='w-[80%]' />
      </div>
      <div className='mx-5'>
         <h1 className='text-2xl font-bold mt-2 mb-2 '>Category Filter </h1>
        <ul className='flex flex-col items-start '>
          <li className='text-xl'><span className='w-3.75 h-3.75 mr-3  bg-blue-100 inline-block rounded-full'></span>cat 1</li>
          <li className='text-xl'><span className='w-3.75 h-3.75 mr-3  bg-red-100 inline-block rounded-full'></span>cat 1</li>
          <li className='text-xl'><span className='w-3.75 h-3.75 mr-3  bg-green-100 inline-block rounded-full'></span>cat 1</li>
        </ul>
      </div>

       
       
      </nav>
  )
}

export default Navbar