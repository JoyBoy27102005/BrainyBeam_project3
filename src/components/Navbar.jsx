// Responsive top navigation bar with logo and links
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  function handleLogout() {
    // Clear simple auth flag and redirect to login
    localStorage.removeItem('token')
    localStorage.removeItem('user_name')
    localStorage.removeItem('user_email')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="/src/assets/logo.svg" alt="Logo" className="brand-logo me-2" />
          <span>BrainyBeam</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({isActive})=>"nav-link" + (isActive? ' active' : '')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className={({isActive})=>"nav-link" + (isActive? ' active' : '')}>Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className={({isActive})=>"nav-link" + (isActive? ' active' : '')}>Profile</NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary ms-2" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
