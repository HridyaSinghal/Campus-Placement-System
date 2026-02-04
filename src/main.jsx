import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentDashboard from './Components/Student/StudentDashboard.jsx'
import CompanyList from './Components/Student/CompanyList.jsx'
import AppliedList from './Components/Student/AppliedList.jsx'
import JobDesPage from './Components/Student/JobDesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/student/student-dashboard" element={<StudentDashboard />}>
          <Route path="company-list" element={<CompanyList />} />
          <Route path="company-list/job-description/:id" element={<JobDesPage />} />
          <Route path="applied-list" element={<AppliedList />} />
          <Route path="upcoming-session" element={<div>Upcoming Session</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="logout" element={<div>Logout</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
