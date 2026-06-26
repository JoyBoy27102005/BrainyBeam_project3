// Home page: public landing with simple welcome
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Button from '../components/common/Button'

export default function Home(){
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <h1>Welcome to BrainyBeam</h1>
        <p className="lead">A simple MERN frontend demo built with React and Bootstrap.</p>
        <Button variant="primary" onClick={() => navigate('/login')} className="mt-3">Get Started</Button>
      </div>
    </div>
  )
}
