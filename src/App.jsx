import React from 'react'

const App = () => {
  const data=[1,2,3,4,5,6,7,5,5,5,5,5,5,5,5,5,5,5,5,5,]
  return (
    <div className='w-screen h-screen flex'>
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

       <div className='w-[88%] content-start overflow-x-hidden overflow-y-auto h-full pl-3 bg-zinc-100 pt-21 flex flex-wrap gap-5'>
        <div className=' w-[15%] h-[30%]  rounded-md  bg-zinc-200 flex  flex-col items-center '>
          <div className='w-[60%] h-[75%] mt-5 hover:scale-110 mb-2'>
            <img className='w-full h-full ' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
          </div>
          <h1 className='text-xl'>Bag</h1>
        </div>
        {data.map(()=>(  <div className=' w-[15%] h-[30%]  rounded-md  bg-zinc-200 flex flex-col items-center '>
          <div className='w-[60%] h-[75%] mt-5 hover:scale-110 mb-2'>
            <img className='w-full h-full ' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
          </div>
          <h1 className='text-xl'>Bag</h1>
        </div>))}
        
        

       

         
        
       </div>  



    </div>
  )
}

export default App