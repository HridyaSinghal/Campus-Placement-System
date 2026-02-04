import React from 'react'
import { useLocation } from 'react-router-dom'

const JobDesPage = () => {
    const {state} = useLocation();
    return (
        <>
            <div className='flex flex-col gap-4 w-3/4'>

                <h1 className='text-4xl font-semibold text-blue-700'>{state.company.companyName}</h1>

                <div className='text-lg flex flex-col gap-3 '>
                    <h1 className='font-semibold text-2xl'>Job Description</h1>
                    <hr />
                    <p>{state.company.jobDescription}</p>

                    <h2 className=' mt-4 font-semibold text-2xl'>Skills Required </h2>
                    <hr />

                    <h2 className='font-semibold'>Date of Apply : <span className='font-normal'>{state.company.dateOfApply}</span></h2>
                    <h2 className='font-semibold'>Role : <span className='font-normal'>{state.company.role}</span> </h2>
                    <h2 className='font-semibold'>Salary : <span className='font-normal'>{state.company.salary}</span></h2>
                    <h2 className='font-semibold'>Location : <span className='font-normal'>{state.company.location}</span></h2>
                    <h2 className='font-semibold'>Bond : <span className='font-normal'>{state.company.bond}</span></h2>
                    <h2 className='font-semibold'>Eligible Degree : <span className='font-normal'>{state.company.eligibleDegree}</span></h2>
                    <h2 className='font-semibold'>Selection Process : <span className='font-normal'>{state.company.selectionProcess}</span></h2>
                    <h2 className='font-semibold'>Special Criterion :<span className='font-normal'>{state.company.specialCriterion}</span> </h2>
                </div>
                <div>
                    <button className='bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer mt-4'>Apply Now</button>

                </div>
            </div>


        </>
    )
}

export default JobDesPage