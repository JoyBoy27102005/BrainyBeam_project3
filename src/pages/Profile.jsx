// Profile page: displays user picture, name, email and an edit button
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Profile(){
  const [user, setUser] = useState({ name:'', email:'', avatar:'/src/assets/avatar.svg' })
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ name:'', email:'' })
  const [loading, setLoading] = useState(true)

  // Fetch profile from backend using stored token
  useEffect(()=>{
    async function load(){
      const token = localStorage.getItem('token')
      if (!token) return
      try{
        const res = await fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
        if (!res.ok) throw new Error('Failed to load profile')
        const data = await res.json()
        setUser({...user, name: data.name, email: data.email})
        setForm({ name: data.name, email: data.email })
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  async function saveProfile(){
    const token = localStorage.getItem('token')
    try{
      const res = await fetch('/api/auth/me', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Failed to save')
      setUser({...user, name: data.name, email: data.email})
      localStorage.setItem('user_name', data.name)
      localStorage.setItem('user_email', data.email)
      setEditing(false)
    }catch(err){
      console.error(err)
      alert(err.message)
    }
  }

  if (loading) return <div className="container py-5">Loading...</div>

  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 text-center">
            <img src={user.avatar} alt="Avatar" className="avatar-img mb-3" />
            <h5>{user.name}</h5>
            <p className="text-muted">{user.email}</p>
          </div>
          <div className="col-md-8">
            <h4>Profile</h4>
            {!editing ? (
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button className="btn btn-primary" onClick={() => setEditing(true)}>Edit profile</button>
              </div>
            ) : (
              <div>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input className="form-control" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
                </div>
                <button className="btn btn-success me-2" onClick={saveProfile}>Save</button>
                <button className="btn btn-outline-secondary" onClick={()=>setEditing(false)}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
