import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import LazyLayout from './components/LazyLayout'
import UserLayout from './pages/user/UserLayout'
import SpocLayout from './pages/spoc/SpocLayout'
import AdminLayout from './pages/admin/AdminLayout'
import ErrorPage from './components/ui/ErrorPage'

const LazySignIn = lazy(() => import('./pages/auth/SignIn'))
const LazySignUp = lazy(() => import('./pages/auth/SignUp'))

const LazyDashboard = lazy(() => import('./pages/admin/Dashboard'))
const LazyAdminUsers = lazy(() => import('./pages/admin/Users'))
const LazyAdminUserDetails = lazy(() => import('./pages/admin/UserDetails'))
const LazyAdminCourses = lazy(() => import('./pages/admin/Courses'))
const LazyAdminCourseDetails = lazy(() => import('./pages/admin/CourseDetails'))
const LazyAdminInstitutes = lazy(() => import('./pages/admin/Institutes'))
const LazyAdminInstituteDetails = lazy(() => import('./pages/admin/InstituteDetails'))
const LazyAdminInstituteCourses = lazy(() => import('./pages/admin/InstituteCourses'))

const LazySpocDashboard = lazy(() => import('./pages/spoc/Dashboard'))
const LazySpocUsers = lazy(() => import('./pages/spoc/Users'))
const LazySpocUserDetails = lazy(() => import('./pages/spoc/UserDetails'))
const LazySpocCourses = lazy(() => import('./pages/spoc/Courses'))
const LazySpocInstitutes = lazy(() => import('./pages/spoc/Institutes'))
const LazySpocCourseDetails = lazy(() => import('./pages/spoc/CourseDetails'))
const LazySpocInstituteDetails = lazy(() => import('./pages/spoc/InstituteDetails'))

const LazyUserHome = lazy(() => import('./pages/user/Home'))
const LazyUserCourses = lazy(() => import('./pages/user/Courses'))
const LazyUserInstitutes = lazy(() => import('./pages/user/Institutes'))
const LazyUserProfile = lazy(() => import('./pages/user/Profile'))
const LazyUserCourseDetails = lazy(() => import('./pages/user/CourseDetails'))
const LazyUserInstituteDetails = lazy(() => import('./pages/user/InstituteDetails'))
// const LazyTerms = lazy(() => import('./components/ui/user/Terms'))
// const LazyPrivacy = lazy(() => import('./components/ui/user/Privacy'))

import Loader from './components/ui/Loader'

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/admin/dashboard" />} />
        <Route path='/dashboard' element={<LazyLayout component={LazyDashboard} />} />
        <Route path='/users' element={<LazyLayout component={LazyAdminUsers} />} />
        <Route path="/users/:id" element={<LazyLayout component={LazyAdminUserDetails} />} />
        <Route path='/courses' element={<LazyLayout component={LazyAdminCourses} />} />
        <Route path='/course' element={<LazyLayout component={LazyAdminCourseDetails} />} />
        <Route path='/institutes' element={<LazyLayout component={LazyAdminInstitutes} />} />
        <Route path='/institute' element={<LazyLayout component={LazyAdminInstituteDetails} />} />
        <Route path='/institute/courses' element={<LazyLayout component={LazyAdminInstituteCourses} />} />
      </Routes>
    </AdminLayout>
  )
}
const SpocRoutes = () => {
  return (
    <SpocLayout>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/spoc/dashboard" />} />
        <Route path='/dashboard' element={<LazyLayout component={LazySpocDashboard} />} />
        <Route path='/users' element={<LazyLayout component={LazySpocUsers} />} />
        <Route path="/users/:id" element={<LazyLayout component={LazySpocUserDetails} />} />
        <Route path='/courses' element={<LazyLayout component={LazySpocCourses} />} />
        <Route path='/institutes' element={<LazyLayout component={LazySpocInstitutes} />} />
        <Route path='/course/:id' element={<LazyLayout component={LazySpocCourseDetails} />} />
        <Route path='/institute/:id' element={<LazyLayout component={LazySpocInstituteDetails} />} />
        <Route path="/courses/:name" element={<LazyLayout component={LazySpocCourses} />} />
      </Routes>
    </SpocLayout>
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
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<LazyLayout component={LazySignIn} />} />
      <Route path="/signup" element={<LazyLayout component={LazySignUp} />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/user/*" element={<UserRoutes />} />
      <Route path="/spoc/*" element={<SpocRoutes />} />
      <Route path="/load" element={<Loader />} />
      {/* <Route path="/terms" element={<LazyTerms />} />
      <Route path="/privacy-policy" element={<LazyPrivacy />} /> */}
    </Routes>
  )
}

export default App
