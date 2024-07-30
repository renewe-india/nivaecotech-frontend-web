'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { useAuth } from '@/hooks/auth'
import Loading from '@/components/Loading'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: null,
    })

    if (!user) {
        return <Loading />
    }
    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex-1 flex flex-col">
                <Topbar isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
                <main className="flex-1  p-4 bg-gray-100">{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout
