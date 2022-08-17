import React from 'react'
import { motion } from 'framer-motion'

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
        transition={{duration: 2s}}
    >
        <p>hello</p>
    </motion.div>
  )
}

export default AboutMe