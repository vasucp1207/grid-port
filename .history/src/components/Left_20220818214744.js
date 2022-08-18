import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Left() {
    return (
        <Contanier>
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
        </Contanier>
    )
}

export default Left

const Contanier = styled.div`
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
        font-size: 50px;
        font-weight: 300;
    }

    .sim-btn{
        font-size: 20px;
        background: rgb(229,231,235);
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
        background: rgb(229,231,235);;
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

    @media(max-width: 800px){
        w
    }
`