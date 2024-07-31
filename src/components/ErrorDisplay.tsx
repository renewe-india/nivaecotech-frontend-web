import React from 'react'

interface ErrorDisplayProps {
    errors: { [key: string]: string[] }
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errors }) => {
    const errorEntries = Object.entries(errors)
    if (errorEntries.length === 0) return null
   
    return (
        <div className="text-red-500">
            {errorEntries.map(([field, messages]) => (
                <div key={field}>
                    {messages.map((message, index) => (
                        <p key={index} className="error-message">
                            {`${field}: ${message}`}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ErrorDisplay
