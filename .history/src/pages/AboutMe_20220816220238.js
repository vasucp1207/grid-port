import React from 'react'
import { motion } from 'framer-motion'
import styled, { StyledComponent } from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                    <Left>
                        <div class='avatar'></div>
                        <h1>Vasu Singh</h1>
                        <div>Web Developer</div>
                        <div>
                            <Github />
                            <TwitterIcon />
                        </div>
                    </Left>
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
    height: 80vh;
    width: 300px;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 13px;
`

const Right = styled.div`

`