import React from 'react'
import { Link } from 'react-router-dom'

function Card({bg, title}) {
  return (
    <div>
      <p>{title}</p>
      <img src={`images/${props.image}`} />
    </div>
  )
}

export default Card