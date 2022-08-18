import React from 'react'
import Left from '../components/Left'
import styled from 'styled-components'
import Card from '../components/Card'

function Projects() {
  return (
    <Conatiner>
      <Left />
      <Right>
        <h1 class='title'>Projects</h1>
        <Card img='Disney.jpeg' title='Disney Clone' />
        <Card img='Tesla.webp' title='Tesla UI' />
        <Card img='Covid.jpeg' title='Covid-19 Tracker' />
        <Card img='Todo.webp' title='Mern Todo App' />
        <Card img='Twitter.jpeg' title='Twitter Clone' />
      </Right>
    </Conatiner>
  )
}

export default Projects

const Conatiner = styled.div`
  display: flex;
  gap: 20px;
`

const Right = styled.div`
  height: 90vh;
  width: 50vw;
  box-shadow: 1px 1px 1px 1px gray;
  background: white;
  border-radius: 15px;
  padding: 20px;

  .title{
    font-size: 40px;
    font-weight: 400;
  }
`