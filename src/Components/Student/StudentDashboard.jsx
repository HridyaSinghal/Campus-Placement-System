import React from 'react'
import StudentNav from './StudentNav'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const StudentDashboard = () => {
  return (
    <>
<StudentNav />
    <div className='flex justify-center items-center flex-col mt-10'>
    <Outlet />
    </div>
    
    </>
    
  )
}

export default StudentDashboard