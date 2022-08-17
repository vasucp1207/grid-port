import React from 'react'

function Home() {
  return (
    <main class="page-content">
      <div class="card">
        <div class="content">
          <h2 class="title">About Me</h2>
          <p class="copy">Get know the about what, I am doing.</p>
          <Link to='/about'><button class="btn">Click</button></Link>
        </div>
      </div>
      <div class="card">
        <div class="content">
          <h2 class="title">Projects</h2>
          <p class="copy">Look at the projects that, I made in my journey.</p>
          <button class="btn">Click</button>
        </div>
      </div>
      <main></main>
  )
}

export default Home