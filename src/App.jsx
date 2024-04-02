import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './connverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Converter/>
      </div>
      <p className="read-the-docs">
       Hunterz KSD
      </p>
    </>
  )
}

export default App
