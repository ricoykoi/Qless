import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import RegisterPage from './components/register/RegisterPage'
import DashboardLayout from './components/dashboard/DashboardLayout'
import DashboardPage from './components/dashboard/DashboardPage'
import ServicesPage from './components/services/ServicesPage'
import ServiceDetailPage from './components/service-detail/ServiceDetailPage'
import RequestsPage from './components/requests/RequestsPage'
import RequestDetailPage from './components/request-detail/RequestDetailPage'
import HomePage from './components/HomePage'
import PaymentsPage from './components/payments/PaymentsPage'
import NotificationsPage from './components/notifications/NotificationsPage'
import ProfilePage from './components/profile/ProfilePage'
import HelpPage from './components/help/HelpPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/requests" element={<RequestsPage />} />
          <Route path="/requests/:id" element={<RequestDetailPage />} />
          <Route path="/payment" element={<PaymentsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/help" element={<HelpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
