import React from 'react'
import { Link } from 'react-router-dom'

function Card({img, title}) {
  return (
    <div>
      <p clas>{title}</p>
      <img src={`assets/${img}`} alt='projects img' />
    </div>
  )
}

export default Card