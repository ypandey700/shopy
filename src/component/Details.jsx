import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Product } from '../Utils/Context';

const Details = (prop) => {
    const {id}=useParams();
    const naviagte = useNavigate();
    
    const {data,setData}=useContext(Product);
    // console.log(data);
    
    const x=data
    const dataa=x.filter((it)=>(id==it.id))
    // console.log(dataa[0].description)
    
    
    if(dataa.length<1)
    {
        return <h1>Loading</h1>
    }
    const deleteHandler=(id)=>{
        const filterPro=x.filter((p)=>p.id!=id)
        setData(filterPro);
        localStorage.setItem("Products",JSON.stringify(filterPro));
        naviagte('/')

        
    }
    
  return (
    <div className='w-[80%] h-screen bg-gray-300 m-auto '>

        <div className='w-full h-full flex  items-center '>
            <div className=' w-[40%] overflow-hidden h-[60%] '>
                <img className='w-full h-full object-contain' src={dataa[0].image} alt="" />
            </div>
            <div className=' w-[40%] h-[60%] pl-10 flex flex-col items-start'>
                <h1 className='text-5xl mb-1 line-clamp-3 overflow-hidden'>{dataa[0].title}</h1>
                <h3 className='text-3xl mb-8 opacity-50'>{dataa[0].category}</h3>
                <h2 className='text-2xl mb-3 font-semibold'>$ {dataa[0].price}</h2>
                <p className='text-xl mb-10 line-clamp-6 '>{dataa[0].description}</p>
                <div className='flex gap-20'>
                     <Link to={`/Edit/${dataa[0].id}`}  className='px-10 py-5 border border-sky-500 text-sky-500 rounded-md'>Edit</Link>
                     <button  onClick={()=>deleteHandler(dataa[0].id)} className='px-10 py-5 border border-pink-400 text-pink-400 rounded-md'>Delete</button>

                </div>
               
                <button></button>
            </div>
        </div>
        
        

    </div>
  )
}

export default Details