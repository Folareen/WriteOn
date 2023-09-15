import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/private/Dashboard'
import NotFound from '../pages/NotFound'
import Landing from '../pages/auth/Landing'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Navigate to={'/'} />} />
      <Route path="/signup" element={<Navigate to={'/'} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default PrivateRoutes