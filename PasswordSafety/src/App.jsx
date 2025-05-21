import { useState } from 'react'

// Components
import Navbar from './navbar'
import LinkPath from './links'
import Article from './Article'
import PasswordCheck from './PasswordChecker'
import LastUpdated from './lastupdated'

function App() {
  return (
    <div>
      <Navbar/>
      <img src="\src\assets\haxx2.jpg" id='haxx'></img>
      <div className="defaultMargins">
        <LinkPath/>
        <Article/>
        <PasswordCheck/>
        <LastUpdated date="21. mai 2025"/>
      </div>

    </div>
  )
}

export default App