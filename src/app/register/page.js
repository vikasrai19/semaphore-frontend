"use client";

import { useState, useEffect } from "react"

export default function Register_Page() {
    //state to list selectable colleges
    const [colleges, setColleges] = useState([]);

    //states
    const [formData, setformData] = useState({
        username: "",
        password: "",
        college: ""
      })

      //Handling input change
      const handleInputChange = async (e) =>{
        const { name, value } = e.target;
        if (name == "username") {
          setformData({username:value})
        } else if(name == "password") {
            setformData({password:value})
        } else if(name == "college"){
            setformData({college:value})
        }
      }

    //TODO: Fetch college list
    useEffect(() => {
        async function fetchData() {
            setColleges(["NMAMIT Nitte", "St. Philomena", "Vivekananda College"]);
        }
        fetchData();

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#000080] to-[#00001A]">


                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">

                    <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
                    
                    {/*Username*/}
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                            <span className="px-3 text-gray-600">
                                <img src="/icons/email.svg" alt="Email Icon" />
                            </span>
                            <input
                                className="w-full px-3 py-2 outline-none"
                                type="email"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="Enter Email"
                                id="email"
                                required
                            />
                        </div>
                    </div>

                    {/*Password*/}
                    <div className="mb-6 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                            <span className="px-3 text-gray-600">
                                <img src="/icons/password.svg" alt="Password Icon" />
                            </span>
                            <input
                                className="w-full px-3 py-2 outline-none"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter Password"
                                id="password"
                                required
                            />
                            {/* Toggle eye icon for visibility */}
                            {/* <span className="px-3 text-gray-600 cursor-pointer">
                                <img src="/icons/eye_closed.svg" alt="Toggle Visibility Icon" />
                            </span> */}
                        </div>
                    </div>

                    {/*College Field*/}
                    <div className="mb-6 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            College
                        </label>
                        <div className="flex items-center border pr-4 border-gray-300 rounded-md overflow-hidden">
                            <span className="px-3 text-gray-600">
                                <img src="/icons/college.svg" alt="College icon" />
                            </span>
                            <select className="w-full px-3 py-2 outline-none" name="college" onChange={handleInputChange} id="College" required>
                                <option value="" className="text-gray-400" defaultValue selected disabled>Select College</option>
                                {
                                    colleges.map((college, index) => (
                                        <option className="text-black" key={college+index} value={college}>{college}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <button
                            className="w-1/2 bg-blue-950 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}