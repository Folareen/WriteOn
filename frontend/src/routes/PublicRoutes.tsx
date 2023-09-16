import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Landing from '../pages/auth/Landing'
import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import NotFound from '../pages/NotFound'
import Article from '../pages/public/Article'
import Profile from '../pages/public/Profile'
import ResetPassword from '../pages/auth/ResetPassword'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/:username" element={<Profile />} />
            <Route path="/:profileId/:articleId" element={<Article />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default PublicRoutes