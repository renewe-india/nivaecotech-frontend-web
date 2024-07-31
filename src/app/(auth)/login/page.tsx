'use client'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import InputField from '@/components/InputField'
import SubmitButton from '@/components/SubmitButton'
import ErrorDisplay from '@/components/ErrorDisplay'
import { Login } from '@mui/icons-material'

function page() {
    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({})

    const submitForm = async (
        event: React.FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        event.preventDefault()
        setIsSubmitting(true)

        await login({
            email,
            password,
            setErrors,
        })
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setIsSubmitting(false)
        }
    }, [errors])

    return (
        <>
            <div className="max-w-2xl mx-auto">
                <form className="space-y-6" onSubmit={submitForm}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Sign in
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
                    <InputField
                        id="password"
                        name="password"
                        type="password"
                        label="Your password"
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                    />
                    {/* <div className="flex items-start">
                        <div className="flex items-start" />
                        <Link
                            href="/forgot-password"
                            className="no-underline text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500">
                            Forget Your Password?
                        </Link>
                    </div> */}
                    <ErrorDisplay errors={errors} />
                    <SubmitButton
                        isSubmitting={isSubmitting}
                        submittingText="Logging in..."
                        buttonText="Login to your account"
                        IconComponent={Login}
                    />
                    {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{' '}
                        <Link
                            href="/register"
                            className="no-underline text-blue-700 hover:underline dark:text-blue-500">
                            Create account
                        </Link>
                    </div> */}
                </form>
            </div>
        </>
    )
}

export default page
