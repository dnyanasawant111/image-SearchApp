import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Images from "./Components/Images"

function App() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="App">
      <Images />

    </div>

  )
}

export default App
