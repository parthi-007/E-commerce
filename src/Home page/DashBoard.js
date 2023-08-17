import React from 'react'
import ProductList from '../Data/ProductList'
import ProductCard from '../Data/ProductCard'

export default function DashBoard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
      {ProductList.map((product)=>  <ProductCard productData={product} key={product.id}/>)}
    </div>
  )
}
