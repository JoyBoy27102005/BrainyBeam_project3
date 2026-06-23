// Small topbar inside dashboard for quick actions
import React from 'react'

export default function Topbar({ onToggleSidebar }) {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      <div>
        <button className="btn btn-outline-primary d-md-none" onClick={onToggleSidebar}>☰</button>
        <h5 className="d-inline ms-2">Dashboard</h5>
      </div>
      <div>
        <input className="form-control" style={{width:200}} placeholder="Search..." />
      </div>
    </div>
  )
}
