import React from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home/>}  />
      <Route path = '/cart'  element = {<Cart/>}  />
    </Routes>
    </>
  )
}

export default App