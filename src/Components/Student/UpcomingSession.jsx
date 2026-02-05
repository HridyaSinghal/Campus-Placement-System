import React from 'react'
import UpcomingSessionCard from './UpcomingSessionCard'

const UpcomingSession = () => {
  return (
    <>
      <h1 className='text-2xl
              font-semibold mb-4 justify-left absolute top-30 left-20 text-blue-900'>Pre Placement Sessions</h1>

      <div className='flex flex-wrap justify-center items-center flex-row mt-5'>

        <UpcomingSessionCard />
        <UpcomingSessionCard />

        <UpcomingSessionCard />
        <UpcomingSessionCard />
        <UpcomingSessionCard />
        <UpcomingSessionCard />

        <UpcomingSessionCard />
        <UpcomingSessionCard />
      </div >
    </>
  )
}

export default UpcomingSession