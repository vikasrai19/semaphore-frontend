"use client";

import { useState } from "react"

export default function Login_Page() {

    //states
    const [formData, setformData] = useState({
        username: "",
        password: "",
      })

      //Handling input change
      const handleInputChange = (e) =>{
        const { name, value } = e.target;
        console.log(name);
        
        if (name == "username") {
          setformData({username:value})
        } else {
            setformData({password:value})
        }
      }


      const handleSubmit = (e) => {
        e.preventDefault();
      }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#000080] to-[#00001A]">
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-8">SIGN IN</h2>

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

                    <div className="flex justify-center w-full">
                        <button
                            className="w-1/2 bg-blue-950 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>


            </div>
        </>
    )
}