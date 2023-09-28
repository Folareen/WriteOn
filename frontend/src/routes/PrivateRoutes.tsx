import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/private/Dashboard'
import NotFound from '../pages/NotFound'
import Landing from '../pages/auth/Landing'
import Blog from '../pages/public/Blog'
import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import BlogDetails from '../pages/public/BlogDetails'
import CreateBlog from '../pages/private/CreateBlog'
import Profile from '../pages/public/Profile'

const PrivateRoutes = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className='mt-[72px] md:mt-[90px]'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Navigate to={'/dashboard'} />} />
          <Route path="/signup" element={<Navigate to={'/dashboard'} />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/create-blog' element={<CreateBlog />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:blogId" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>

  )
}

export default PrivateRoutes