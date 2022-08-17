import React from 'react'
import { motion } from 'framer-motion'

function AboutMe() {

    const pageVarients = {
        initial: {
            opacity: 0
        }
        
    }

  return (
    <motion.div
        transition={{type: 'string', stiffness: 100, delay: 2}}
    >
        <p>hello</p>
    </motion.div>
  )
}

export default AboutMe