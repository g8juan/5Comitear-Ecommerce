import React from 'react'

const Categories = ({categories}) => {

  return (
    <div>
      {categories.map(category => {
          return <div>{category.name}</div>
      })}
    </div>
  )
}

export default Categories