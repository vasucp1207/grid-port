import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProgressBar from '../components/ProgressBar';

function Right() {
    return (
        <Container>
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

        </Container>
    )
}

export default Container

const Container = styled.div`
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
        margin-bottom: 25px;
    }

    .skills{
        font-weight: 400;
        margin-bottom: 20px;
    }

    .all-bar{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-top: 10px;
        justify-content: space-between;
        gap: 23px;
    }
`