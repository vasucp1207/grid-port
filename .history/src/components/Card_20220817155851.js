import React from 'react'
import { Link } from 'react-router-dom'

function Card({bg, title}) {
  return (
    <div>
      <p>{title}</p>
      <img src={`assets/${bg}`} alt='p/>
    </div>
  )
}

export default Card