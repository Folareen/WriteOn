import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/private/Dashboard'
import NotFound from '../pages/NotFound'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PrivateRoutes