import React from 'react'
import { Link } from 'react-router-dom'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Home() {
    return (
        <main class="page-content">
            <div class="card">
                <div class="content">
                    <EmojiEmotionsIcon
                    <h2 class="title">About Me</h2>
                    <p class="copy">Get know the about what, I am doing.</p>
                    <Link to='/about'><button class="btn">Click</button></Link>
                </div>
            </div>
            <div class="card">
                <div class="content">
                    <h2 class="title">Projects</h2>
                    <p class="copy">Look at the projects that, I made in my journey.</p>
                    <Link to='/projects'><button class="btn">Click</button></Link>
                </div>
            </div>
        </main>
    )
}

export default Home