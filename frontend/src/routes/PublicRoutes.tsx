import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../components/layouts/Footer'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Landing from '../pages/auth/Landing'
import Login from '../pages/auth/Login'
import ResetPassword from '../pages/auth/ResetPassword'
import Signup from '../pages/auth/Signup'
import Article from '../pages/public/Article'
import Blog from '../pages/public/Blog'
import Header from '../components/layouts/Header'

const PublicRoutes = () => {
    const { pathname } = useLocation()

    return (
        <div className='min-h-screen flex flex-col'>
            {
                !(pathname == '/login' || pathname == '/signup' || pathname == '/forgot-password' || pathname == '/reset-password') &&
                <Header />
            }
            <div className='mt-[72px] md:mt-[90px]'>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path='/blog' element={<Blog />} />
                    {/* <Route path="/:username" element={<Profile />} /> */}
                    <Route path="/:profileId/:articleId" element={<Article />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>

            {
                !(pathname == '/login' || pathname == '/signup' || pathname == '/forgot-password' || pathname == '/reset-password') &&
                <Footer />
            }
        </div>
    )
}

export default PublicRoutes