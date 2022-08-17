import React from 'react'

function ProgressBar() {
    return (
        <div>
            <div class='detail'>
                <div class='lang'><span>{lang} </span><span>%</span></div>
                <div class='c-bar'>
                    <div class='c-fill'></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar