import React from 'react'
import Left from '../components/Left'
import styled from 'styled-components'

function Projects() {
  return (
    <Conatiner>
      <Left />
      <Right>

      </Right>
    </Conatiner>
  )
}

export default Projects

const Conatiner = styled.div`

`

const Right = styled.div`
  height: 90vh;
  width: 50vw;
  box-shadow: 1px 1px 1px 1px gray;
  background: white;
    border-radius: 15px;
    padding: 20px;
`