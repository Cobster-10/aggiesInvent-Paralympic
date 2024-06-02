"use client";
import React from 'react'
import AddToCart from './AddToCart';

const ProductCard = () => {
  return (
    <div className='p-1 bg-sky-400 text-xl hover:bg-sky-500'>
       <AddToCart></AddToCart>
    </div>
  )
}

export default ProductCard