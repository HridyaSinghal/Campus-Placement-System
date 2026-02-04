import React from 'react'

const CompanyListCard = () => {
  return (
    <>

    <div className='border-2 w-230 h-24 m-4 rounded-md shadow-md flex wrap hover:shadow-lg hover:border-blue-500 items-center hover:scale-105 transition-all duration-300 '>
        <div className='font-bold text-3xl ml-10 flex justify-center items-center'>
        <h2>TCS</h2>
        </div>
        <div className='text-lg flex gap-12 flex ml-auto mr-10 justify-center items-center'>
            <p>Role: Developer</p>
            <p>CTC: 10 LPA</p>
            <p>Location: bangalore</p>  
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer'>Apply</button>    
        </div>
    </div>

    </>
  )
}

export default CompanyListCard