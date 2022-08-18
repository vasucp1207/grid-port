import React from 'react'
import { Link } from 'react-router-dom'

function Card({img, title}) {
  return (
    <Container class='card'>
      <p class='title'>{title}</p>
      <img class='img' src={`assets/${img}`} alt='projects img' />
    </Container>
  )
}

export default Card

cosnt Container = styled