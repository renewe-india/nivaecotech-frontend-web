'use client'

import React from 'react'

interface SubmitButtonProps {
    isSubmitting: boolean
    submittingText: string
    buttonText: string
    IconComponent: React.ElementType
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    isSubmitting,
    submittingText,
    buttonText,
    IconComponent,
}) => {
    return (
        <div className="flex items-center gap-2 justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <IconComponent />

            <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2">
                {isSubmitting ? submittingText : buttonText}
            </button>
        </div>
    )
}

export default SubmitButton
