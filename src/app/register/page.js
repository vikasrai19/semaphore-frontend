"use client";

import { DropDown } from "@/components/dropdown";
import { PasswordTextInput, TextInput } from "@/components/input";
import { useQueryConfig } from "@/config/useQuery.config";
import { useGetData } from "@/hooks/useGetData";
import { Mail01Icon, LockPasswordIcon, BankIcon, UserGroupIcon, SmartPhone01Icon } from "hugeicons-react";
import { useState, useEffect } from "react"

export default function Register_Page() {
    //state to list selectable colleges
    const [colleges, setColleges] = useState([]);

    const { data: collegeList, isLoading: isCollegeListLoading } = useGetData(
        `collegeList`,
        `${process.env.NEXT_PUBLIC_URL}/web/api/registration/v1/colleges`,
        useQueryConfig
    )

    //states
    const [formData, setformData] = useState({
        email: "",
        password: "",
        college: "",
        phoneNumber: "",
        teamName: "",
    })

    //Handling input change
    const handleInputChange = async (e) => {
        const { name, value } = e.target;
        if (name == "email") {
            setformData({ email: value })
        } else if (name == "password") {
            setformData({ password: value })
        } else if (name == "college") {
            setformData({ college: value })
        } else if (name == 'teamName') {
            setformData({ teamName: value })
        } else if (name == 'phoneNumber') {
            setformData({ phoneNumber: value })
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
        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData.entries());
        console.log("body ", body);
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#000080] to-[#00001A]">


                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm mx-4 lg:mx-auto bg-white p-8 rounded-lg shadow-lg">

                    <h2 className="text-2xl font-bold text-center mb-8 font-dosisBold">Register</h2>

                    {/*Username*/}
                    <TextInput
                        label={"Email"}
                        name={'email'}
                        value={formData.email}
                        onChange={handleInputChange}
                        icon={<Mail01Icon color="#000" />}
                        placeholder={'Enter Email'}
                    />

                    {/*Password*/}
                    <PasswordTextInput
                        label={"Password"}
                        name={'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        icon={<LockPasswordIcon color="#000" />}
                        placeholder={'Enter Password'}
                    />
                    <TextInput
                        label={"Phone Number"}
                        name={'phoneNumber'}
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        icon={<SmartPhone01Icon color="#000" />}
                        placeholder={'Enter Phone Number'}
                    />
                    <TextInput
                        label={"Team Name"}
                        name={'teamName'}
                        value={formData.teamName}
                        onChange={handleInputChange}
                        icon={<UserGroupIcon color="#000" />}
                        placeholder={'Enter Team Name'}
                    />
                    <DropDown
                        name={'collegeId'}
                        label="Select College"
                        DropDownItems={collegeList?.map((ele, index) => {
                            return {
                                label: ele?.collegeName,
                                value: ele?.collegeId,
                            }
                        })}
                        placeholder={'Select College'}
                    />
                    <div className="flex justify-center w-full mt-10">
                        <button
                            className="w-1/2 bg-blue-950 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 font-dosisMedium"
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