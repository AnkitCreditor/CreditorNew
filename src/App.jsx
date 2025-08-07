import React from 'react'
import { useState } from 'react'

import './App.css'
import DevinNavbar from '../src/components/Navbar'
import { WebsiteService } from './services/WebsiteService'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DevinNavbar />
        <WebsiteService />
        </div>
    </>
  )
}

export default App
