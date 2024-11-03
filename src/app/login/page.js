"use client";

import { useSubmit } from "@/hooks/useSubmit";
import { useState } from "react"

import { Mail01Icon, LockPasswordIcon } from "hugeicons-react";
import { PasswordTextInput, TextInput } from "@/components/input";
import { toast } from "react-toastify";
import { useAuthStore } from "@/store";
import { useGetData } from "@/hooks/useGetData";
import { useQueryConfig } from "@/config/useQuery.config";
import { useRouter } from "next/navigation";

export default function Login_Page() {
    const router = useRouter()
    const { submitData: loginUser, isLoading: isLoading } = useSubmit()
    const { setLoginToken, token } = useAuthStore()
    const { data: authData, isLoading: isAuthLoading } = useGetData(
        `isAuthenticted`,
        `${process.env.NEXT_PUBLIC_URL}/web/api/auth/v1/IsAuthenticated?token=${token}`,
        useQueryConfig,
    )

    if (authData) {
        console.log("auth data ", authData)
        const userType = authData?.userType?.userType?.toLowerCase()
        if (userType) { }
    }

    //states
    const [formData, setformData] = useState({
        email: "",
        password: "",
    })

    //Handling input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name == "email") {
            setformData({ email: value })
        } else {
            setformData({ password: value })
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData);
        try {
            const { data } = await loginUser(
                `${process.env.NEXT_PUBLIC_URL}/web/api/auth/v1/Login`,
                body,
            )
            if (data) {
                console.log("login data ", data)
                toast.success("Login Success")
                await setLoginToken(data)
                handleRouting(data)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message ?? error?.message ?? 'Login failed')
        }
    }

    const handleRouting = (data) => {
        const userType = data?.userType?.toLowerCase();
        if (userType == "participant") {
            router.push('/participant')
        } else {
            router.push('/error')
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#000080] to-[#00001A]">
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-sm mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-8 font-dosisBold">SIGN IN</h2>

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

                    <div className="flex justify-center w-full font-dosisMedium">
                        <button
                            className="w-1/2 bg-blue-950 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
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