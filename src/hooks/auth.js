import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    const fetcher = async url => {
        try {
            const response = await axios.get(url)
            return response.data
        } catch (error) {
            if (error.response?.status === 409) {
                router.push('/verify-email')
            }
            throw error
        }
    }

    const {
        data: user,
        error,
        mutate,
    } = useSWR('/api/user', fetcher, {
        shouldRetryOnError: false, // Do not retry on error
        revalidateOnFocus: false, // Do not revalidate on focus
    })

    const register = async ({ setErrors, ...props }) => {
        setErrors([])

        try {
            await axios.post('/register', props)
            await mutate()
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors)
            } else {
                throw error
            }
        }
    }

    const login = async ({ setErrors, ...props }) => {
        setErrors([])

        try {
            const response = await axios.post('/api/tenant/login', props)

            sessionStorage.setItem('token', response.data.data.token)
            await mutate()
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors)
            } else {
                throw error
            }
        }
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        setErrors([])
        setStatus(null)

        try {
            const response = await axios.post('/forgot-password', { email })
            setStatus(response.data.status)
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors)
            } else {
                throw error
            }
        }
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        setErrors([])
        setStatus(null)

        try {
            const response = await axios.post(
                'api/tenant/reset-password',
                props,
            )
            router.push('/login?reset=' + btoa(response.data.status))
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors)
            } else {
                throw error
            }
        }
    }

    const resendEmailVerification = async ({ setStatus }) => {
        const response = await axios.post('/email/verification-notification')
        setStatus(response.data.status)
    }

    const logout = async () => {
        await axios.post('/api/tenant/logout')
        await mutate()

        sessionStorage.removeItem('token') // Remove the token
        window.location.pathname = '/'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) {
            router.push(redirectIfAuthenticated)
        }
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        ) {
            router.push(redirectIfAuthenticated)
        }
        if (middleware === 'auth' && error) {
            logout()
        }
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
