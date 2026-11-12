import React from 'react'
import type { ProductCardProps } from '../types/interface/product.interface'
import { useNavigate } from 'react-router-dom'

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    const navigate = useNavigate();
  return (
    <div className='border border-black p-2'>
        <img src={product.image} alt={product.title}  width="200px" height="200px"/>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>Price: {product.price}</h3>
        <button className='border border-black p-2 mt-4' onClick={()=>navigate(`/products/${product.id}`)}>view</button>
    </div>
  )
}

export default ProductCard