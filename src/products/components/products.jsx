import React from 'react'
import {Link} from "react-router-dom";

const Products = ({products}) => {
  return (
    <div>
      <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}><img src={product.thumbnail} alt=''/></Link>
            <Link to={`/products/${product.id}`}><p>{product.name}</p></Link>
            <p>{product.description}</p>
            <p>{product.stock}</p>
            {/* VER DISPLAY DE REVIEWS <p>{product.reviews}</p>*/}
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Products
