import React from 'react'

function ProgressBar({lang, per}) {
    return (
        <div>
            <div class='detail'>
                <div class='lang'><span>{lang} </span><span>{per}</span></div>
                <div class='c-bar'>
                    <div class='c-fill'></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar

const Contanier = styled.div`

`