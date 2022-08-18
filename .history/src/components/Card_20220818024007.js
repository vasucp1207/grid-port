import React, { useState } from 'react'
import styled from 'styled-components'

function Card({ img, title }) {

  return (
    <>
      <Container>
        <img class='img' src={`assets/${img}`} alt='projects img'></img>
        <p class='title'>{title}</p>
      </Container>
    </>
  )
}

export default Card

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(229,231,235);
  width: fit-content;
  border-radius: 10px;
  cursor: pointer;

  .img{
    height: 140px;
    width: 230px;
    borderret;
  }

  .title{
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`