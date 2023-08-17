import React from 'react'

export default function ProductListItem(props) {
  return (
    <div className=' card m-2 cursor-pointer justify-content-center justify-content-center d-flex flex-column align-items-center' >
    <div className='mt-3'>
    <img src={props.thumbnail} height={150} width={180} alt={props.title} className="" style={{borderRadius:25}}  />
    </div>
<div className='card-body mt-2'>
    <h5 className='card-titie'>{props.title}</h5>
    <h6 className='m-2'>Price ${props.price}</h6>
    <h6 className='m-2'>Discount {props.discountPercentage}%</h6>
    <h6 className='m-2' >Rating {props.rating}</h6>
    <div className='mt-3'>
        {props.stock > 0 ? <button className='btn btn-success '>Available</button>: <button className='btn btn-outline-danger'>Out of stock</button>}
    </div>
    
    </div>
</div>
  )
}
