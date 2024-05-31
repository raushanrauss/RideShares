import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import AllRoute from './AllRoutes/AllRoute'

function App() {
  

  return (
    <>
    
     <Navbar />
     <div style={{display:'flex'}}>
      <div>sdf</div>
      <div style={{margin:400}}>  <AllRoute /></div>
     </div>
    
    </>
  )
}

export default App
