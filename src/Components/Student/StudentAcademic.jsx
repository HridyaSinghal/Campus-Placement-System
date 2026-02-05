import React, { useState } from "react";

const StudentAcademic = () => {
  const [isPursuing, setIsPursuing] = useState(false);
  const [scoreType, setScoreType] = useState("percentage");

  return (
    <div>
      <form className="grid grid-cols-2 gap-x-40 gap-y-10 p-10 mt-2 bg-white shadow-lg rounded-md w-270 justify-center border-2 border-blue-700">

        {/* Institution Name */}
        <div>
          <p className="mb-1">Institution Name</p>
          <input
            className="w-64 p-2 rounded border border-gray-700 outline-none"
            type="text"
            placeholder="Enter institution name"
          />
        </div>

         {/* Degrees */}
        <div>
          <p className="mb-1">Degrees</p>
          <select className="w-64 p-2 rounded border border-gray-700 outline-none">
            <option value="secondary">Secondary</option>
            <option value="high-school">High School</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
          </select>
        </div>

  {/* Start Date */}
        <div>
          <p className="mb-1">Start Date</p>
          <input
            className="w-64 p-2 rounded border border-gray-700 outline-none"
            type="date"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col">
          <p className="mb-1">End Date</p>
          <input
            className="w-64 p-2 rounded border border-gray-700 outline-none"
            type="date"
            disabled={isPursuing}
          />
          <div className="flex flex-row gap-2 ">
<p>Pursuing</p>
          
          <input className="mt-1"
            type="checkbox"
            checked={isPursuing}
            onChange={() => setIsPursuing(!isPursuing)}
          />
          </div>
          
        </div>

        

 {/* Score Type Radio Buttons */}
        <div className="flex flex-col justify-center w-full ">
            <div>
          <p className="mb-1">
            Enter {scoreType.toUpperCase()}
          </p>
          <input
            className="w-64 p-2 rounded border border-gray-700 outline-none"
            type="number"
            placeholder={`Enter ${scoreType}`}
          />
        </div>

          <p className="mt-3">Score Type</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="scoreType"
                value="percentage"
                checked={scoreType === "percentage"}
                onChange={(e) => setScoreType(e.target.value)}
              />
              Percentage
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="scoreType"
                value="cgpa"
                checked={scoreType === "cgpa"}
                onChange={(e) => setScoreType(e.target.value)}
              />
              CGPA
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="scoreType"
                value="gpa"
                checked={scoreType === "gpa"}
                onChange={(e) => setScoreType(e.target.value)}
              />
              GPA
            </label>
          </div>

        </div>

        

      
       
      </form>
    </div>
  );
};

export default StudentAcademic;
