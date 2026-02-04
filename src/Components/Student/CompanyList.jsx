import React from 'react'
import CompanyListCard from '../CompanyListCard'

const CompanyList = () => {
  return (
    <div className='flex flex-wrap justify-center items-start mt-6'>
      <CompanyListCard />
      <CompanyListCard />
      <CompanyListCard />
      <CompanyListCard />
      <CompanyListCard />
      <CompanyListCard />
      <CompanyListCard />
    </div>
  )
}

export default CompanyList