import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/private/Dashboard'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default PrivateRoutes