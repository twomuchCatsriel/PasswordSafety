import { useState } from 'react'

// Components
import Navbar from './navbar'
import LinkPath from './links'
import HeaderText from './header'

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <LinkPath></LinkPath>

        <HeaderText name="Passord Sikkerhet"></HeaderText>
    </div>
  )
}

export default App