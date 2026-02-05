import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentDashboard from './Components/Student/StudentDashboard.jsx'
import CompanyList from './Components/Student/CompanyList.jsx'
import AppliedList from './Components/Student/AppliedList.jsx'
import JobDesPage from './Components/Student/JobDesPage.jsx'
import UpcomingSession from './Components/Student/UpcomingSession.jsx'
import StudentProfile from './Components/Student/StudentProfile.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/student/student-dashboard" element={<StudentDashboard />}>
          <Route path="company-list" element={<CompanyList />} />
          <Route path="company-list/job-description/:id" element={<JobDesPage />} />
          <Route path="applied-list" element={<AppliedList />} />
          <Route path="upcoming-session" element={<UpcomingSession />} />
          <Route path="profile" element={<StudentProfile />} />
          <Route path="logout" element={<div>Logout</div>} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
