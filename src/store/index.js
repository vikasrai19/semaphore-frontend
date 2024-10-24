import { create } from 'zustand'
import { config } from '../config/header.config'
import DB from '../helper/storage'
import { API } from '../config/url.config'
import axios from '../utils/axios'


const useStore = create((set) => ({
    passToken: null,
    loading: false,
    error: null,
    save: (token) => {
        set({ passToken: token })
    },
}))


const useAccountStore = create((set) => ({
    accountName: null,
    profileImage: null,
    setAccountName: (name) => {
        set({ accountName: name })
    },
    setProfileImage: (link) => {
        set({ profileImage: link })
    },
}))


const useAuthStore = create((set) => ({
    user: {},
    isAuthenticated: false,
    loading: false,
    token: DB.getToken(),
    error: null,
    login: async (email, password) => {
        set({ loading: true })
        try {
            const res = await axios.post(`/${API.login}`, {
                email,
                password,
            })
            set({ isAuthenticated: true })
            set({ token: res?.data?.token })
            set({ user: res?.data?.User })
            set({ error: null })
            DB.setToken(res?.data?.token)
            return res?.data?.User?.UserType?.UserType.toLowerCase()
        } catch (err) {
            console.log(`Login error ${err}`)
            set({ error: err?.response?.data ?? 'Some error occurred' })
            throw err
        } finally {
            set({ loading: false })
        }
    },
    register: async (name, email, password, phoneNo) => {
        try {
            set({ loading: true })
            const res = await axios.post(
                `/${API.register}`,
                {
                    name, email, password, phoneNo,
                }
            )
            return res?.data
        } catch (error) {
            console.log('error ', error)
            set({ error: error?.response?.data ?? 'Something went wrong' })
            throw error;
        } finally {
            set({ loading: false })
        }
    },
    logout: () => {
        DB.removeToken()
        console.log("token ", DB.getToken())
        set({ isAuthenticated: false, user: null })
        set({ token: null })
    },
    isAuthenticatedUser: async () => {
        try {
            let { data } = await axios.get(API.isAuthenticated, config(DB.getToken()))
            set({ isAuthenticated: true })
        } catch (err) {
            set({ isAuthenticated: false })
        }
    },
}))

const useAPIMsgAndError = create((set) => ({
    res: null,
    setMsgWithErr: (res) => {
        set({ res })
    },
    clear: () => {
        set({ res: null })
    },
}))

export { useStore, useAuthStore, useAPIMsgAndError, useAccountStore }