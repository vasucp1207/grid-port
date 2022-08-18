import React from 'react'
import styled from 'styled-components'

function Card({img, title}) {
  return (
    <Container class='card'>
      <p class='title'>{title}</p>
      <img class='img' src={`assets/${img}`} alt='projects img' />
    </Container>
  )
}

export default Card

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(229,231,235);
  ma

  .img{
    height: 150px;
    width: 220px;
  }

  .title{
    font-size: 20px;
  }
`