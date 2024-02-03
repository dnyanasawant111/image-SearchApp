import { useState } from 'react'

import './App.css'
import Images from "./Components/Images"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Images/>

      </div>
      
  )
}

export default App
