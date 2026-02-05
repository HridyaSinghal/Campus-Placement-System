import React from 'react'
import { Link } from 'react-router-dom'

const CompanyListCard = ({ company, isApplied }) => {
  return (
    <>

      <div className={`border ${isApplied ? "w-190" : "w-230"}  h-27 m-4 rounded-sm shadow-md flex wrap hover:shadow-lg border-blue-700 items-center hover:scale-105 transition-all duration-300 relative`}>
        <div className='font-medium  text-xl w-40 ml-10 flex items-center flex-wrap '>
          <h2>{company.companyName}</h2>
        </div>
        <div className='text-lg flex justify-center gap-6 flex items-center '>
          <div className='flex p-5 flex-col justify-center items-center'>
            <p>Role: </p>
            <p className='font-semibold'>{company.role}</p>
          </div>

          {/*  here we use company list card in applied list , because the entire structure of the card is same just we change button and and set statuts */}
          {
            !isApplied ?
              <>
                <p>CTC: {company.salary}</p>
                <p>Location: {company.location}</p>
                <div className='m-auto absolute right-10 '>
                  <Link to={`/student/student-dashboard/company-list/job-description/${company.id}`} state={{ company }} className='bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-sky-600 cursor-pointer'>Apply</Link>

                </div>
              </> :
              <>
                {/* applied list card  */}

                <div className='text-lg flex flex-col justify-center flex items-center absolute right-50 '>

                  <p>Status</p>
                  <p className='font-semibold'>ShortListed</p>
                </div>

                <div className='m-auto absolute right-10 '>
                  <button className='bg-rose-500 text-white px-3 py-2 rounded-sm hover:bg-rose-600 cursor-pointer font-normal'>Withdraw</button >

                </div>
              </>
          }

        </div>
      </div>

    </>
  )
}

export default CompanyListCard