// 404 page shown for unmatched routes
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="bb-center-screen">
      <div className="text-center">
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/" className="bb-button bb-button-outline">Go home</Link>
      </div>
    </div>
  )
}
