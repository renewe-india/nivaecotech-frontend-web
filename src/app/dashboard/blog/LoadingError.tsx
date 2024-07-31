import React from 'react'

interface LoadingErrorProps {
    loading: boolean
    error: string | null
    data: any[]
    children: React.ReactNode
}

const LoadingError: React.FC<LoadingErrorProps> = ({
    loading,
    error,
    data,
    children,
}) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (data.length === 0) return <div>No blogs available</div>
    return <>{children}</>
}

export default LoadingError
