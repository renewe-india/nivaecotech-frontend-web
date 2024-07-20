'use client'

import React from 'react'
import { Icon } from 'react-feather'

interface SubmitButtonProps {
    isSubmitting: boolean
    submittingText: string
    buttonText: string
    icon: Icon
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    isSubmitting,
    submittingText,
    buttonText,
    icon: Icon,
}) => {
    return (
        <>
            <div className="flex items-center gap-2 justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <Icon color="white" size={24} />
                <div className="flex">
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? submittingText : buttonText}
                    </button>
                </div>
            </div>
        </>
    )
}

export default SubmitButton
