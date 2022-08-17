import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components';
import { motion } from 'framer-motion'

function ProgressBar({lang, per}) {
    return (
        <Contanier>
            <div class='detail'>
                <div class='lang'><span>{lang} </span><span>{per}</span></div>
                <div class='c-bar'>
                    <motion.div className='fill'
                        animate={{width: per}}
                        transition={{duration: 2}}
                    >
                    </motion.div>
                </div>
            </div>
        </Contanier>
    )
}

export default ProgressBar

const Contanier = styled.div`
     .c-bar{
        width: 100%;
        height: 30px;
        border-radius: 9999px;
        border: 1px solid black;
    }

    .fill{
        width: 0;
        border-radius: 9999px;
        height: 30px;
        background: black;
    }
`