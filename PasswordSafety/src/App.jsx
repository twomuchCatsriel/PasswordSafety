import { useState } from 'react'

// Components
import Navbar from './navbar'
import LinkPath from './links'
import HeaderText from './header'
import Highlight from './highlight'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="defaultMargins">
        <LinkPath/>
        <section>
          <HeaderText name="Passord Sikkerhet"/>
          <Highlight name="Husker du den forrige gangen du endret de viktigste passordene dine?"/>
        </section>
      </div>

    </div>
  )
}

export default App