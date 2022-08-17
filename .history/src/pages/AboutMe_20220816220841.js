import React from 'react'
import { motion } from 'framer-motion'
import styled, { StyledComponent } from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
                        <h1 class='name'>Vasu Singh</h1>
                        <div class='sim-btn'>Web Developer</div>
                        <div class='sim-btn'>Problem Solver</div>
                        <div>
                            <GitHubIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                        </div>
                        <div class='address'>
                            <p><LocationOnIcon/> Meerut, India</p>
                            <p>vasucp1207@gmail.com</p>
                            <p>9675xxxxxx</p>
                        </div>
                        <div class='gb-btn'>Contact Me</div>
                        <div class='gb-btn'>Dard UI</div>
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
    height: 90vh;
    width: 300px;
    box-shadow: 1px 1px 1px 1px gray;
    border-radius: 13px;

    .avatar{
        height: 150px;
        border: 1px solid black;
        width: 150px;
        border-radius: 50%;
    }
`

const Right = styled.div`

`