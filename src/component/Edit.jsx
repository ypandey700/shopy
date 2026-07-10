
import { nanoid } from 'nanoid/non-secure';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../Utils/Context'


export const Edit = () => {
  const{id}=useParams();
  const {data,setData}=useContext(Product);
    const [pro, setpro] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
    id:nanoid()
  });
     
      const navigate=useNavigate();
      const handlesumbit=(e)=>{
          e.preventDefault();
          
          if(pro.title.trim().length<5 ||
              pro.description.trim().length<5 ||
              pro.image.trim().length<5 ||
              pro.price.trim().length<1 ||
              pro.category.trim().length<5 ){
              alert("Each field must contain valid inputs");
              return;
          }
          
          
         
         const updatedData = data.map((p) =>p.id == id ? pro : p);

        setData(updatedData);
        localStorage.setItem("Products", JSON.stringify(updatedData));
          // console.log({...pro});
          navigate('/');        
          
          
      }
      useEffect(()=>{
        const pro=data.filter((p)=>p.id==id);
        setpro(pro[0])
      },[])
      console.log(pro);
       
  return (
    <div className='bg-zinc-400 w-full h-screen'>
        <div className='max-w-7xl mx-auto mt-10 flex flex-col gap-5'>
            <h1 className='text-center text-4xl'>Edit Product</h1>
                <form onSubmit={handlesumbit} className='flex flex-col gap-5  items-center' >
                    <input type="text" onChange={(e)=>(setpro({...pro,[e.target.name]: e.target.value}))} value={pro && pro.title} name="title" placeholder='Name of Product' className='w-1/2 p-3   hover:border-pink-400  border-[1px]   focus:outline-none rounded-md bg-zinc-300' />
                   
                    <input type="url" onChange={(e)=>(setpro({...pro,[e.target.name]: e.target.value}))} value={pro && pro.image} name="image"  placeholder='Image Url' className='w-1/2 p-3 rounded-md  hover:border-pink-400  border-[1px]  focus:outline-none bg-zinc-300' />
                    <div className='flex gap-5  w-1/2'>
                        <input type="number" onChange={(e)=>(setpro({...pro,[e.target.name]: e.target.value}))} value={pro && pro.price} name="price"  placeholder='Price of Product' className='w-1/2 p-3 rounded-md   hover:border-pink-400  border-[1px]   focus:outline-none bg-zinc-300' />
                        <input type="text" onChange={(e)=>(setpro({...pro,[e.target.name]: e.target.value}))} value={pro && pro.category} name="category" placeholder='Category of Product' className='w-1/2 p-3 rounded-md  hover:border-pink-400  border-[1px]   focus:outline-none bg-zinc-300' />
                    </div>
                     <textarea  onChange={(e)=>(setpro({...pro,[e.target.name]: e.target.value}))} value={pro && pro.description} name="description"  className='w-1/2 p-3 rounded-md bg-zinc-300   hover:border-pink-400  border-[1px]   focus:outline-none h-40  ' placeholder='Description of Product' ></textarea>
                    <button className='px-4 py-2 hover:border bg-zinc-500  rounded-md'>Edit</button>
                    
                    
                  

                </form>
        </div>

    </div>
  )
}
