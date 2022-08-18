import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Left from '../components/Left';
import Right from '../components/Right';

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
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVarients}
            transition={{ delay: 0.5, type: 'spring' }}
        >

            <Container>
                <Comp>
                    <Left />
                    <Right />
                </Comp>

            </Container>
        </motion.div>
    )
}

export default AboutMe

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Comp = styled.div`
    display: flex;
    gap: 20px;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`
