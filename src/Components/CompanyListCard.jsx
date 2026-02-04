import React from 'react'
import { Link } from 'react-router-dom'

const CompanyListCard = () => {
  return (
    <>

    <div className='border w-200 h-27 m-4 rounded-sm shadow-md flex wrap hover:shadow-lg hover:border-blue-500 items-center hover:scale-105 transition-all duration-300 '>
        <div className='font-semibold text-2xl ml-10 flex justify-center items-center flex-wrap'>
        <h2>Samsung</h2>
        </div>
        <div className='text-lg flex mr-10 gap-12 flex ml-auto justify-center items-center'>
            <p>Role: Developer</p>
            <p>CTC: 10 LPA</p>
            <p>Location: bangalore</p>  
            <Link to="/student/student-dashboard/company-list/job-description" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer'>Apply</Link>    
        </div>
    </div>

    </>
  )
}

export default CompanyListCard