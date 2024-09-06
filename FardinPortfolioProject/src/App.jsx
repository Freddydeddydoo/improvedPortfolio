import { useState } from 'react'
import Hello from './Components/Hello'
import './main.css'
import NavBar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Pageformat'>
      <NavBar/>
      <Hello/>
      hello world
    </div>
    </>
  )
}

export default App
