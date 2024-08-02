'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import InputField from '@/components/InputField'
import SubmitButton from '@/components/SubmitButton'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { LockReset } from '@mui/icons-material'

function ForgotPasswordPage() {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = async (
        event: React.FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        event.preventDefault()
        setIsSubmitting(true)

        await forgotPassword({
            email,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        if (errors.length > 0) {
            setIsSubmitting(false)
        }
    }, [errors])

    return (
        <>
            <div className="max-w-2xl mx-auto">
                <AuthSessionStatus className="mb-4" status={status} />

                <form className="space-y-6" onSubmit={submitForm}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Reset Password
                    </h3>
                    <InputField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoFocus
                    />

                    <SubmitButton
                        isSubmitting={isSubmitting}
                        submittingText="Sending..."
                        buttonText="Reset Password"
                        IconComponent={LockReset}
                    />
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Remembered your password?{' '}
                        <Link
                            href="/login"
                            className="no-underline text-blue-700 hover:underline dark:text-blue-500">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgotPasswordPage
