'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { UserPlus } from 'react-feather'
import InputField from '@/components/InputField'
import SubmitButton from '@/components/SubmitButton'
import ErrorDisplay from '@/components/ErrorDisplay'

function RegisterPage() {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<string[]>([])

    const submitForm = async (
        event: React.FormEvent<HTMLFormElement>,
    ): Promise<void> => {
        event.preventDefault()
        setIsSubmitting(true)

        await register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
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
                <form className="space-y-6" onSubmit={submitForm}>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Create an account
                    </h3>
                    <InputField
                        id="name"
                        name="name"
                        label="Name"
                        placeholder="Your Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        autoFocus
                    />
                    <InputField
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <InputField
                        id="password"
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                    <InputField
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        label="Confirm Password"
                        placeholder="••••••••"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                    <ErrorDisplay errors={errors} />
                    <SubmitButton
                        isSubmitting={isSubmitting}
                        submittingText="Registering..."
                        buttonText="Create your account"
                        icon={UserPlus}
                    />
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-blue-700 hover:underline dark:text-blue-500">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default RegisterPage
