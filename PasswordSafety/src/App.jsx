import { useState } from 'react'

// Components
import Navbar from './navbar'
import LinkPath from './links'
import Article from './Article'
import PasswordCheck from './PasswordChecker'

function App() {
  return (
    <div>
      <Navbar/>
      <img src="\src\assets\haxx2.jpg" id='haxx'></img>
      <div className="defaultMargins">
        <LinkPath/>
        <Article/>
        <PasswordCheck/>
      </div>

    </div>
  )
}

export default App