import React from 'react'

interface ErrorDisplayProps {
    errors: string[]
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errors }) => {
    if (errors.length === 0) return null

    return (
        <div className="text-red-500">
            {errors.map((error, index) => (
                <p key={index} className="error-message">
                    {error}
                </p>
            ))}
        </div>
    )
}

export default ErrorDisplay
