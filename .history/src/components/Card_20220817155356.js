import React from 'react'
import { Link } from 'react-router-dom'

function Card({bg, title}) {
  return (
    <div>
      <p>{title}</p>
      <img src={bg} />
      <img src='/Disney.jpeg' />
    </div>
  )
}

export default Card