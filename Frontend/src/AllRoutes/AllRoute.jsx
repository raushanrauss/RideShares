import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../Authentication/Auth'
import Home from '../Pages/Home'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default AllRoute
