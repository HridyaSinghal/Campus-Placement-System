import React from 'react'

const UpcomingSessionCard = () => {
  return (
    <>
      <div className="border w-100  gap-5 h-50 m-4 rounded-sm shadow-md flex flex-col wrap hover:shadow-lg border-blue-700 items-center hover:scale-105 transition-all duration-300 relative">
        <div className='  text-2xl w-40 flex items-center flex-wrap justify-center pt-2.5'>
          <h2>Google</h2>
        </div>
        <div className=' text-lg w-60 flex items-center flex-wrap justify-center'>
          <h1 className='text-md'>Scheduled On:</h1><span className='ml-2'>20-05-2024</span>
          <h1>Starts At: </h1><span className='ml-2'>10:00</span>
          <button className="bg-sky-600 hover:bg-blue-900 text-white font-semibold py-1 px-4 rounded mt-5">Join Session</button>

        </div>



      </div>



    </>
  )
}

export default UpcomingSessionCard