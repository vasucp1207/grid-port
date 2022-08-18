import React from 'react'
import { Link } from 'react-router-dom'

function Card({img, title}) {
  return (
    <C class='card'>
      <p class='title'>{title}</p>
      <img class='img' src={`assets/${img}`} alt='projects img' />
    </div>
  )
}

export default Card