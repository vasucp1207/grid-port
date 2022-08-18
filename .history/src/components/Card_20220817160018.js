import React from 'react'
import { Link } from 'react-router-dom'

function Card({bg, title}) {
  return (
    <div>
      <p>{title}</p>
      <img src=`assets/${bg}` alt='projects img' />
    </div>
  )
}

export default Card