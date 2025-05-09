import { useState } from 'react'

// Components
import Navbar from './navbar'
import LinkPath from './links'
import Article from './Article'

function App() {
  return (
    <div>
      <Navbar/>
      <div className="defaultMargins">
        <LinkPath/>
        <Article/>
      </div>

    </div>
  )
}

export default App