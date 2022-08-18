import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProgressBar from '../components/ProgressBar';
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
                        <h1 class='title'>About Me</h1>
                        <p class='des'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
                        <h1 class='skills'>Language & Framework</h1>

                        <div class='all-bar'>
                            <ProgressBar lang='Html' per='70%' />
                            <ProgressBar lang='Css' per='70%' />
                            <ProgressBar lang='Javascript' per='50%' />
                            <ProgressBar lang='C++' per='60%' />
                            <ProgressBar lang='React' per='40%' />
                            <ProgressBar lang='Express' per='40%' />
                            <ProgressBar lang='MongoDb' per='30%' />
                            <ProgressBar lang='Firebase' per='30%' />
                        </div>

                    </Right> */}

                    <Left />
                    <Right />
                </Comp>

            </Container>
        </motion.div>
    )
}

export default AboutMe

const Container = styled.div`
    background: white;
`

const Comp = styled.div`
    display: flex;
    gap: 20px;
    background-image: linear-gradient(to right bottom,#00f260,#0575e6);
`
