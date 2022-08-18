import React from 'react'
import styled from 'styled-components'

function Card({img, title}) {
  return (
    <Container class='card'>
    <img class='img' src={`assets/${img}`} alt='projects img' />
      <p class='title'>{title}</p>
    </Container>
  )
}

export default Card

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(229,231,235);
  width: fit-content;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  .img{
    height: 150px;
    width: 250px;
  }

  .title{
    font-size: 20px;
    text-align: center;
  }
`