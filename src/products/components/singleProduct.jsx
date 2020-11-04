import React from 'react'

const SingleProduct = ({singleProduct}) => {
  console.log(singleProduct)
  return (
    <div>
      <img src={singleProduct.image} alt=""/>
      <ul>
        <li> Name: {singleProduct.name} </li>
        <li> Descripcion: {singleProduct.description} </li>
        <li> Price: {singleProduct.price} </li>
        <li> Reviews: {singleProduct.reviews} </li>
      </ul>
    </div>
  )
}

export default SingleProduct
