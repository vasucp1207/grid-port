import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {
  return (
    <motion.div
        animate={{x: 100}}
        transition={{type: 'string', stiffness: 100}}
    >
        <p>hello</p>
    </motion.div>
  )
}

export default AboutMe