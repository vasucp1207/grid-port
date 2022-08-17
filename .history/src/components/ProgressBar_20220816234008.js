import React from 'react'
import styled from 'styled-components'

function ProgressBar(props) {
    return (
        <Contanier>
            <div class='detail'>
                <div class='lang'><span>{props.lang} </span><span>{per}</span></div>
                <div class='c-bar'>
                    <div class='c-fill'></div>
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

    .c-fill{
        width: 0;
        border-radius: 9999px;
        height: 30px;
        animation: fill-c 2.5s forwards;
        background: black;
    }

    @keyframes fill-c{
        100%{
            width: ${(props) => props.per};
        }
    }
`