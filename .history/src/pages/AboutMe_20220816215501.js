import React from 'react'
import { motion } from 'framer-motion'
import styled, { StyledComponent } from 'styled-components'

function AboutMe() {

    const pageVarients = {
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
        <Container>
            <motion.div
                initial='initial'
                animate='in'
                exit='out'
                variants={pageVarients}
                transition={{ duration: 1.2, type: 'spring' }}
            >
                
                <Comp>
                    <Left></Left>
                    <Right></Right>
                </Comp>

            </motion.div>
        </Container>
    )
}

export default AboutMe

const Container = styled.div`
    /* background-image: linear-gradient(to right bottom,#00f260,#0575e6); */
`

const Comp = styled.div`

`

const Left = styled.div`

`

const Comp = styled.div`

`