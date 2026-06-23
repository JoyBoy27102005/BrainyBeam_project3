// Home page: public landing with simple welcome
import React from 'react'
import Navbar from '../components/Navbar'

export default function Home(){
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <h1>Welcome to BrainyBeam</h1>
        <p className="lead">A simple MERN frontend demo built with React and Bootstrap.</p>
      </div>
    </div>
  )
}
