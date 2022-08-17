import React from 'react'
import { motion } from 'framer-motion'
import { StyledComponent } from 'styled-components'

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
                <p>hello</p>
            </motion.div>
        </Container>
    )
}

export default AboutMe

const con