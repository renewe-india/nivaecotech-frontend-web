import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-Tenant': process.env.NEXT_PUBLIC_APP_BACKEND_ID,
    },
    withCredentials: true,
})

// Add a request interceptor to include the token
axios.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        } else {
            // Set Authorization header to 'Bearer ' for guest users
            config.headers['Authorization'] = 'Bearer '
        }
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

export default axios
