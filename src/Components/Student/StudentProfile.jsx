import React, { useState } from "react";
import StudentAcademic from "./StudentAcademic";

const StudentProfile = () => {
    const [academics, setAcademics] = useState([{ id: Date.now() }]);

    const addAcademic = () => {
        setAcademics((prev) => [...prev, { id: Date.now() }]);
    };
    const removeAcademic = () => {

        if (academics.length === 1) return;
        setAcademics((prev) => prev.slice(0, -1));
    };

    return (
        <>
            <div className="w-full justify-center items-center flex flex-col  pt-10 pb-10">


                <h1 className="text-2xl font-semibold ">
                    Student Personal Information
                </h1>


                <form className="grid grid-cols-2 gap-x-40 gap-y-10 p-10 mt-5 bg-white shadow-lg rounded-md w-3/4 justify-center border-2 border-blue-700">

                    <div>
                        <p className="mb-1 font-medium">Name: </p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="text" placeholder="Enter your name" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">Age</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="number" placeholder="Enter your age" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">Email</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">Enrollment Number</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="text" placeholder="Enter your enrollment number" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">Course</p>
                        <select className="w-64 p-2 rounded border border-gray-700 outline-none" name="course" id="course">
                            <option value="pgdm">PGDM</option>
                            <option value="ba eco">BA ECO</option>
                            <option value="bba">BBA</option>
                            <option value="bca">BCA</option>
                            <option value="mca">MCA</option>
                        </select>
                    </div>

                    <div>
                        <p className="mb-1 font-medium">Course Specialisation</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="text" placeholder="Enter your course specialisation" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">Phone Number</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                        <p className="mb-1 ">Alternate Phone Number</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="tel" placeholder="Enter your alternate phone number" />
                    </div>

                    <div className="col-span-2">
                        <p className="mb-1">Address</p>
                        <input className="w-64 p-2 rounded border border-gray-700 outline-none" type="text" placeholder="Enter your address" />
                    </div>

                </form>

                <h1 className="text-2xl font-semibold  pt-10 ">
                    Acadmics Information
                </h1>


{academics.map((a) => (
    <div className="mt-5">

                    <StudentAcademic key={a.id} />
                    </div>
                ))}


                
<div className="ml-220" >

<button onClick={() => {
                    addAcademic();
                    console.log("Profile Updated");
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">Add</button>

                {academics.length > 1 && (
                    <button onClick={() => {
                        removeAcademic();
                    }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4">Remove</button>
                )}

</div>
                
            </div>

        </>

    );
};  

export default StudentProfile;
