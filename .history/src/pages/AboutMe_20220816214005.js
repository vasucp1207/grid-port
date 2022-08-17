import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <motion.div
        transition={{type: 'string', stiffness: 100, delay: 0.5}}
    >
        <p>hello</p>
    </motion.div>
  )
}

export default AboutMe