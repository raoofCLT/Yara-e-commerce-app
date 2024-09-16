import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGQ3YmM4YTFmMTMyM2U1NWIyNDM2NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MjY0MTg2MTksImV4cCI6MTcyNjY3NzgxOX0.BnRWCcE8V_fsRzcMHvxS6VsLFWAxZamSPgD9pKJk-g0"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})

 
