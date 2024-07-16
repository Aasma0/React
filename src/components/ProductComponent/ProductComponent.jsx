import React, { useState } from 'react'

const ProductComponent = () => {
    const [product, setProduct] = useState("");

  return (
    <>
    <div className='bg-neutral-800 p-4 text-white text-center font-thin'>Add Product</div>
    <form className='m-6'>
    <div className='w-56  '>
    <label className='text-xl text-black mr-2' for='name'>Product Name:</label>
            <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-black rounded-lg p-2 mb-4' id='name' type="text" name='productName' placeholder='Enter the product name' /> 
            
            <label className='text-xl text-black mr-2' for='name'>Product Price:</label>
            <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-black rounded-lg p-2 mb-4' id='name' type="text" name='productName' placeholder='Enter the product price' /> 

            <label className='text-xl text-black mr-2' for='name'>Product category:</label>
            <input onChange={(e)=>setProduct(e.target.value)} className='border-2 border-black rounded-lg p-2 mb-4' id='name' type="text" name='productName' placeholder='Enter the product price' />
    </div>   
    </form>
    </>
  )
}

export default ProductComponent
