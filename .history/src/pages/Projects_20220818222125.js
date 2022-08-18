import Left from '../components/Left'
import styled from 'styled-components'
import Card from '../components/Card'
import { motion } from 'framer-motion'

function Projects() {

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }

  }

  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      transition={{ delay: 0.5, type: 'spring' }}
      variants={pageVariants}
    >
      <Conatiner>
        <Left />
        <Right>
          <h1 class='heading'>Projects</h1>
          <div class='projects'>
            <Card img='Disney.jpeg' title='Disney Clone' />
            <Card img='Tesla.webp' title='Tesla UI' />
            <Card img='Covid.jpeg' title='Covid-19 Tracker' />
            <Card img='Todo.webp' title='Mern Todo App' />
            <Card img='Twitter.jpeg' title='Twitter Clone' />
          </div>
        </Right>
      </Conatiner>
    </motion.div>
  )
}

export default Projects

const Conatiner = styled.div`
  display: flex;
  gap: 20px;

  @media(max-width: 750px){
    flex-direction: column;
  } 
`

const Right = styled.div`
  height: 90vh;
  width: 60vw;
  box-shadow: 1px 1px 1px 1px gray;
  background: white;
  border-radius: 15px;
  padding: 20px;
  overflow: hidden;
  overflow-y: scroll;

  .heading{
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .projects{
    display: grid;
    grid-template-columns: repeat(12, minmax(0,1fr));
    gap: 15px;
    overflow: hidden;
    overflow-y: scroll;
    overflow-x: scroll;
  }

  @media(max-width: 750px){
    width: 450px;
  }
`