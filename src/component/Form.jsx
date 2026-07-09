import { nanoid } from 'nanoid/non-secure';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Product } from '../Utils/Context'

 

const Form = () => {
    const {data,setData}=useContext(Product);
    const [name,setName]=useState("");
    const [des,setDes]=useState("");
    const [img,setImg]=useState("");
    const [price,setPrice]=useState("");
    const [cat,setCat]=useState("");
    const navigate=useNavigate();
    const handlesumbit=(e)=>{
        e.preventDefault();
        
        if(name.trim().length<5 ||
            des.trim().length<5 ||
            img.trim().length<5 ||
            price.trim().length<1 ||
            cat.trim().length<5 ){
            alert("Each field must contain valid inputs");
            return;
        }
        
        
        const dataa={title:name,price:price,description:des,category:cat,image:img,id:nanoid()};
        setData([...data,dataa])
        localStorage.setItem("Products",JSON.stringify([...data,dataa]))
        console.log(dataa);
        navigate('/');        
        
        
    }

    
  return (
    <div className='bg-zinc-400 w-full h-screen'>
        <div className='max-w-7xl mx-auto mt-10 flex flex-col gap-5'>
            <h1 className='text-center text-4xl'>Add New Product</h1>
                <form onSubmit={handlesumbit} className='flex flex-col gap-5  items-center' >
                    <input type="text" onChange={(e)=>(setName(e.target.value))} placeholder='Name of Product' className='w-1/2 p-3   hover:border-pink-400  border-[1px]   focus:outline-none rounded-md bg-zinc-300' />
                   
                    <input type="url" onChange={(e)=>(setImg(e.target.value))} placeholder='Image Url' className='w-1/2 p-3 rounded-md  hover:border-pink-400  border-[1px]  focus:outline-none bg-zinc-300' />
                    <div className='flex gap-5  w-1/2'>
                        <input type="number" onChange={(e)=>(setPrice(e.target.value))} placeholder='Price of Product' className='w-1/2 p-3 rounded-md   hover:border-pink-400  border-[1px]   focus:outline-none bg-zinc-300' />
                        <input type="text" onChange={(e)=>(setCat(e.target.value))} placeholder='Category of Product' className='w-1/2 p-3 rounded-md  hover:border-pink-400  border-[1px]   focus:outline-none bg-zinc-300' />
                    </div>
                     <textarea  onChange={(e)=>(setDes(e.target.value))} className='w-1/2 p-3 rounded-md bg-zinc-300   hover:border-pink-400  border-[1px]   focus:outline-none h-40  ' placeholder='Description of Product' ></textarea>
                    <button className='px-4 py-2 hover:border-[1px] bg-zinc-500  rounded-md'>Submit</button>
                    
                    
                  

                </form>
        </div>

    </div>
  )
}

export default Form