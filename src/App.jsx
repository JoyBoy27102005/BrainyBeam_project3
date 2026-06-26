// App root: sets up routes and global layout
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import DonorHistory from './pages/DonorHistory'
import PatientHistory from './pages/PatientHistory'
import DonationHistory from './pages/DonationHistory'
import InventoryHistory from './pages/InventoryHistory'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected dashboard and profile routes */}
        <Route
          path="/dashboard/donor-history"
          element={
            <ProtectedRoute>
              <DonorHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/patient-history"
          element={
            <ProtectedRoute>
              <PatientHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/donation-history"
          element={
            <ProtectedRoute>
              <DonationHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/inventory-history"
          element={
            <ProtectedRoute>
              <InventoryHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  )
}
