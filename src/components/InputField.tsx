'use client'

import React from 'react'

interface InputFieldProps {
    id: string
    name: string
    type?: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    required?: boolean
    autoComplete?: string
    label: string
    autoFocus?: boolean
    disabled?: boolean
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    autoComplete,
    label,
    autoFocus = false,
    disabled = false,
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                disabled={disabled}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
        </div>
    )
}

export default InputField
