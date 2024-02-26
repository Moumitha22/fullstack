import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import LazyLayout from './components/ui/LazyLayout'
import UserLayout from './pages/user/UserLayout'
import AdminLayout from './pages/admin/AdminLayout'
import ErrorPage from './components/ui/ErrorPage'

const LazySignIn = lazy(() => import('./pages/auth/SignIn'))
const LazySignUp = lazy(() => import('./pages/auth/SignUp'))

const LazyDashboard = lazy(() => import('./pages/admin/Dashboard'))
const LazyAdminUsers = lazy(() => import('./pages/admin/Users'))
const LazyAdminCourses = lazy(() => import('./pages/admin/Courses'))
const LazyAdminInstitutes = lazy(() => import('./pages/admin/Institutes'))
const LazyAdminCourseDetails = lazy(() => import('./pages/admin/CourseDetails'))
const LazyAdminInstituteDetails = lazy(() => import('./pages/admin/InstituteDetails'))

const LazyUserHome = lazy(() => import('./pages/user/Home'))
const LazyUserCourses = lazy(() => import('./pages/user/Courses'))
const LazyUserInstitutes = lazy(() => import('./pages/user/Institutes'))
const LazyUserProfile = lazy(() => import('./pages/user/Profile'))
const LazyUserCourseDetails = lazy(() => import('./pages/user/CourseDetails'))
const LazyUserInstituteDetails = lazy(() => import('./pages/user/InstituteDetails'))

import Loader from './components/ui/Loader'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        <Route path='/dashboard' element={<LazyLayout component={LazyDashboard} />} />
        <Route path='/users' element={<LazyLayout component={LazyAdminUsers} />} />
        <Route path='/courses' element={<LazyLayout component={LazyAdminCourses} />} />
        <Route path='/institutes' element={<LazyLayout component={LazyAdminInstitutes} />} />
        <Route path='/course/:id' element={<LazyLayout component={LazyAdminCourseDetails} />} />
        <Route path='/institute/:id' element={<LazyLayout component={LazyAdminInstituteDetails} />} />
        <Route path="/courses/:name" element={<LazyLayout component={LazyAdminCourses} />} />
      </Routes>
    </AdminLayout>
  )
}

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<Navigate to="/user/home" />} />
          <Route path="/home" element={<LazyLayout component={LazyUserHome} />} />
          <Route path="/courses" element={<LazyLayout component={LazyUserCourses} />} />
          <Route path="/institutes" element={<LazyLayout component={LazyUserInstitutes} />} />
          <Route path="/profile" element={<LazyLayout component={LazyUserProfile} />} />
          <Route path="/course/:id" element={<LazyLayout component={LazyUserCourseDetails} />} />
          <Route path="/institute/:id" element={<LazyLayout component={LazyUserInstituteDetails} />} />
          <Route path="/courses/:name" element={<LazyLayout component={LazyUserCourses} />} />
      </Routes>
    </UserLayout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/signin" element={<LazyLayout component={LazySignIn} />} />
      <Route path="/signup" element={<LazyLayout component={LazySignUp} />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/load" element={<Loader />} />
    </Routes>
  )
}

export default App
