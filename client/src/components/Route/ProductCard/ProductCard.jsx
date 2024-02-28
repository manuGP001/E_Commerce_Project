import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ data, key}) => {
    const d= data.name;
    const product_name= d.replace(/\s+/g,"-");
    console.log(d);
    console.log(product_name);
  return (
    <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}></Link>
      </div>
  )
}

export default ProductCard
