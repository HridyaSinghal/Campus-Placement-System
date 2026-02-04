import React, { useState } from 'react'
import CompanyListCard from '../CompanyListCard'
import { useEffect } from 'react'
import axios from 'axios'
const CompanyList = () => {

const data = [
  {
    id: 1,
    companyName: "Samsung Private LTD",
    jobDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum quasi facere repudiandae quod iusto perspiciatis voluptatum voluptatem sunt dolorum.",
    skillsRequired: ["Java", "Spring Boot", "React", "SQL"],
    dateOfApply: "2024-12-31",
    role: "Software Developer",
    salary: "10 LPA",
    location: "Bangalore",
    bond: "2 Years",
    eligibleDegree: "B.Tech / MCA",
    selectionProcess: "Aptitude Test → Technical Interview → HR Interview",
    specialCriterion: "Minimum 7 CGPA required"
  },
  {
    id: 2,
    companyName: "Google India",
    jobDescription:
      "Work on scalable frontend applications and improve user experience across products.",
    skillsRequired: ["React", "JavaScript", "HTML", "CSS"],
    dateOfApply: "2024-11-30",
    role: "Frontend Engineer",
    salary: "18 LPA",
    location: "Hyderabad",
    bond: "No Bond",
    eligibleDegree: "B.Tech / B.E",
    selectionProcess: "Online Test → 2 Technical Rounds → HR",
    specialCriterion: "Strong DSA required"
  },
  {
    id: 3,
    companyName: "Microsoft",
    jobDescription:
      "Design and develop backend services with high availability and scalability.",
    skillsRequired: ["Java", "Spring", "Microservices", "Azure"],
    dateOfApply: "2024-12-15",
    role: "Backend Developer",
    salary: "20 LPA",
    location: "Bangalore",
    bond: "1 Year",
    eligibleDegree: "B.Tech / M.Tech",
    selectionProcess: "Coding Round → System Design → HR",
    specialCriterion: "Microservices experience preferred"
  }
];


  return (
    <div className='flex flex-wrap justify-center items-start mt-6'>
      {data.map((company) => (
        <CompanyListCard key={company.id} company={company} />
      ))}
    </div>
  )
}

export default CompanyList