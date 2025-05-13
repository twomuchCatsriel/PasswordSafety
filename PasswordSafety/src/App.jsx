import { useState } from 'react'

// Components
import Navbar from './navbar'
import LinkPath from './links'
import Article from './Article'

function App() {
  return (
    <div>
      <Navbar/>
      <img src="\src\assets\haxx2.jpg" id='haxx'></img>
      <div className="defaultMargins">
        <LinkPath/>
        <Article/>
      </div>

    </div>
  )
}

export default App