// Dashboard layout: contains Sidebar, Topbar and statistic cards
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import StatCard from '../components/StatCard'
import Navbar from '../components/Navbar'

export default function Dashboard(){
  // showSidebar controls mobile sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false)

  function toggleSidebar(){
    setShowSidebar(v => !v)
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className={"sidebar d-none d-md-block p-3"}>
          <Sidebar />
        </div>

        {/* Mobile sidebar overlay */}
        <div className={"sidebar d-md-none p-3" + (showSidebar? ' show' : '')}>
          <Sidebar onClose={() => setShowSidebar(false)} />
        </div>

        <div className="content-area">
          <Topbar onToggleSidebar={toggleSidebar} />

          <div className="container-fluid">
            <div className="row">
              <StatCard title="Users" value="1,234" icon="👥" />
              <StatCard title="Sales" value="$12,345" icon="💰" />
              <StatCard title="Visits" value="56,789" icon="📈" />
              <StatCard title="Feedback" value="321" icon="✉️" />
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Activity</h5>
                    <p className="card-text">Placeholder for charts or lists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
