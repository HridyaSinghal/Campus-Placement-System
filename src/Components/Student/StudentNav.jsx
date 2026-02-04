import React from 'react'
import { Link } from 'react-router-dom'

const StudentNav = () => {
  return (
    <>
    <div className='flex justify-between h-26 bg-white shadow-md items-center'>
      <div className='pl-10 '>
        <img className="h-22 w-70" src="https://jimsrohini.org/assets2025/images/logo/logo.png" alt="" />
      </div>
      <div className='flex gap-8 pr-10 text-lg font-medium'>
        <Link to="/student/student-dashboard/company-list">Company List</Link>
        <Link to="/student/student-dashboard/applied-list">Applied List</Link>
        <Link to="/student/student-dashboard/upcoming-session">Upcoming Session</Link>
        <Link to="/student/student-dashboard/profile">Profile</Link>
        <Link to="/student/student-dashboard/logout">Logout</Link>
      </div>
    </div>
    </>
  )
}

export default StudentNav