import React, { useEffect, useState } from 'react'
import useApi from "../hooks/UseApi"
import toast from 'react-hot-toast';

export default function Category() {
  const [categories, setCategories] = useState([])

//   const fetchCategory = async () =>
const {request} = useApi()

const fetchCategory = async () => {
  try {
    const res = await request("/products/category", "get");
    // setCategories(res.data);

    setCategories(res.data.categories || []);
  } catch (error) {
    console.error("Error fetching products:", error);
    toast.error(error.message || "Failed to load products");
  }
};
useEffect(() => {
fetchCategory()

  
  // return () => {
    
  // };
}, []);


  return (
    <div className='w-[300px] border  flex flex-col p-5 gap-5'>
      <h2 className='font-bold rounded justify-center text-white h-10 flex items-center  bg-purple'>All Categories</h2>
      <ul className=' flex flex-col justify-center gap-3'>
       {
        categories.map((category, index)=>(
          <li className='uppercase rounded p-1 ' key={index}>
            {category}
          </li>
        ))
       }
      </ul>
    </div>
  )
}
