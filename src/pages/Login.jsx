// Login page: simple form that stores a fake auth token in localStorage
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  async function submit(e){
    e.preventDefault()
    setLoading(true)
    setError(null)
    try{
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Login failed')

      // store token and user info
      localStorage.setItem('token', data.token)
      localStorage.setItem('user_name', data.user.name)
      localStorage.setItem('user_email', data.user.email)
      navigate('/dashboard')
    }catch(err){
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <div className="card p-4" style={{width:360}}>
        <h4 className="mb-3">Login</h4>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
          </div>
          <button className="btn btn-primary w-100" type="submit" disabled={loading}>{loading? 'Signing in...' : 'Sign in'}</button>
        </form>
      </div>
    </div>
  )
}
