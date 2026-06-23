// Sidebar for dashboard navigation (collapsible on small screens)
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ onClose }) {
  return (
    <div className="sidebar p-3">
      <div className="d-flex align-items-center mb-4">
        <img src="/src/assets/logo.svg" alt="Logo" className="brand-logo me-2" />
        <strong>BrainyBeam</strong>
      </div>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink to="/dashboard" className={({isActive})=>"nav-link" + (isActive? ' active' : '')} onClick={onClose}>Overview</NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/profile" className={({isActive})=>"nav-link" + (isActive? ' active' : '')} onClick={onClose}>Profile</NavLink>
        </li>
      </ul>
    </div>
  )
}
