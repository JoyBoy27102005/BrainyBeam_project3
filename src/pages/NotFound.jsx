// 404 page shown for unmatched routes
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <div className="text-center">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/">Go home</Link>
      </div>
    </div>
  )
}
