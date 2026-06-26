// Dashboard layout: contains Sidebar, Topbar and statistic cards
import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import StatCard from '../components/StatCard'
import Navbar from '../components/Navbar'
import Card from '../components/common/Card'
import Loader from '../components/common/Loader'

export default function Dashboard(){
  const [showSidebar, setShowSidebar] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setLoading(false))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  function toggleSidebar(){
    setShowSidebar(v => !v)
  }

  if (loading) {
    return <div className="bb-center-screen"><Loader /></div>
  }

  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-container">
        <aside className="sidebar d-none d-md-block p-3">
          <Sidebar />
        </aside>

        <aside className={`sidebar d-md-none p-3${showSidebar ? ' show' : ''}`}>
          <Sidebar onClose={() => setShowSidebar(false)} />
        </aside>

        <main className="content-area">
          <Topbar onToggleSidebar={toggleSidebar} />

          <div className="container-fluid px-0">
            <div className="row g-3">
              <StatCard title="Users" value="1,234" icon="👥" />
              <StatCard title="Sales" value="$12,345" icon="💰" />
              <StatCard title="Visits" value="56,789" icon="📈" />
              <StatCard title="Feedback" value="321" icon="✉️" />
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <Card title="Activity">
                  <p>Placeholder for charts or lists.</p>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
