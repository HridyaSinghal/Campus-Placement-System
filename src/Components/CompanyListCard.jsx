import React from 'react'
import { Link } from 'react-router-dom'

const CompanyListCard = ({ company }) => {
  return (
    <>

    <div className='border w-230 h-27 m-4 rounded-sm shadow-md flex wrap hover:shadow-lg hover:border-blue-500 items-center hover:scale-105 transition-all duration-300 relative'>
        <div className='font-semibold text-2xl w-40 ml-10 flex items-center flex-wrap'>
        <h2>{company.companyName}</h2>
        </div>
        <div className='text-lg flex justify-center gap-6 flex items-center '>
            <p>Role: {company.role}</p>
            <p>CTC: {company.salary}</p>
            <p>Location: {company.location}</p>  
            <div className='m-auto absolute right-10 '>
            <Link to={`/student/student-dashboard/company-list/job-description/${company.id}`} state={{ company }} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer'>Apply</Link>    

            </div>
        </div>
    </div>

    </>
  )
}

export default CompanyListCard