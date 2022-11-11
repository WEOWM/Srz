import React from 'react'
import Home from './Home'
import About from './Page/About/About' 
import { Route,Routes } from 'react-router-dom'
import Teams from './Page/Teams/Teams'
import Players from './Page/Players/Players'



const App = () => {
  return (
    <div>
     
      
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/Teams'element={<Teams/>}/>
        <Route path='/Players'element={<Players/>}/>
      </Routes>
    
    </div>
  )
}

export default App