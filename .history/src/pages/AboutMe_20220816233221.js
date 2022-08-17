import React from 'react'
import { motion } from 'framer-motion'
import styled, { StyledComponent } from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProgressBar from '../components/ProgressBar';
import { Javascript } from '@mui/icons-material';

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
                    <Left>
                        <div class='avatar'></div>
                        <h1 class='name'>Vasu Singh</h1>
                        <div class='sim-btn'>Web Developer</div>
                        <div class='sim-btn'>Problem Solver</div>
                        <div class='icon-cont'>
                            <GitHubIcon className='icons' />
                            <TwitterIcon className='icons' />
                            <LinkedInIcon className='icons' />
                        </div>
                        <div class='address'>
                            <p class='city'><LocationOnIcon /> Meerut, India</p>
                            <p>vasucp1207@gmail.com</p>
                            <p>9675xxxxxx</p>
                        </div>
                        <div class='gb-btn'>Contact Me</div>
                        <div class='gb-btn'>Dard UI</div>
                    </Left>
                    <Right>
                        <h1 class='title'>About Me</h1>
                        <p class='des'>I'm am an undergrad student interested in Machine Learining, Web Developmet and Comptetive Programming. Currently I'm mainly working on OpenSource also play with Neural Networks on weekends.</p>
                        <h1 class='skills'>Language & Framework</h1>

                        <div class='detail'>
                            <div class='lang'><span>C++ </span><span>70%</span></div>
                            <div class='c-bar'>
                                <div class='c-fill'></div>
                            </div>
                        </div>

                        <ProgressBar lang={Javascript}/>
                        <ProgressBar lang={C++}/>
                        <ProgressBar lang={}/>
                        <ProgressBar lang={}/>
                        <ProgressBar lang={}/>
                        <ProgressBar lang={}/>

                    </Right>
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

const Left = styled.div`
    height: 90vh;
    width: 280px;
    box-shadow: 1px 1px 1px 1px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-bottom: 20px;
    background: white;
    border-radius: 15px;

    .avatar{
        margin-top: 20px;
        height: 150px;
        border: 1px solid black;
        width: 150px;
        border-radius: 50%;
    }

    .name{
        font-size: 40px;
        font-weight: 300;
    }

    .sim-btn{
        font-size: 20px;
        background: rgb(205, 195, 195);;
        width: 200px;
        height: 35px;
        border-radius: 9999px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-cont{
        width: 280px;
        padding-left: 30px;
        padding-right: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icons{
        height: 40px;
        width: 40px;
        color: #07f260;
        cursor: pointer;
        
        :hover{
            color: black;
        }
    }

    .address{
        background: rgb(205, 195, 195);;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 280px;
        height: 120px;
        padding: 10px;
    }

    .gb-btn{
        width: 110px;
        border-radius: 9999px;
        background-image: linear-gradient(to right bottom,#00f260,#0575e6);
        color: white;
        font-size: 17px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .city{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Right = styled.div`
    height: 90vh;
    width: 50vw;
    box-shadow: 1px 1px 1px 1px gray;
    background: white;
    border-radius: 15px;
    padding: 20px;

    .title{
        font-weight: 400;
        margin-bottom: 10px;
    }
    
    .des{
        font-size: 17px;
        margin-bottom: 10px;
    }

    .skills{
        font-weight: 400;
    }

    .c-bar{
        width: 100%;
        height: 30px;
        border-radius: 9999px;
        border: 1px solid black;
    }

    .c-fill{
        width: 0;
        border-radius: 9999px;
        height: 30px;
        animation: fill-c 2.5s forwards;
        background: black;
    }

    @keyframes fill-c{
        100%{
            width: 90%;
        }
    }
`