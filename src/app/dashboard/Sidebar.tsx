'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
    ArrowForwardIos,
    ArrowBackIos,
    Article,
    Work,
    Mail,
    Home,
} from '@mui/icons-material'

interface SidebarProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
    const [isDesktopOpen, setIsDesktopOpen] = useState(true)
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    const toggleDesktopSidebar = () => {
        setIsDesktopOpen(!isDesktopOpen)
    }

    return (
        <>
            <div
                className={`hidden lg:block h-full transition-width duration-300 ${
                    isDesktopOpen ? 'w-64' : 'w-20'
                } bg-neutral-300 text-white relative`}>
                <div className="p-4 flex justify-between items-center text-black">
                    {isDesktopOpen ? (
                        <h2 className="m-0 text-2xl font-bold">Dashboard</h2>
                    ) : (
                        <ArrowForwardIos onClick={toggleDesktopSidebar} />
                    )}
                    <button
                        onClick={toggleDesktopSidebar}
                        className="focus:outline-none ">
                        {isDesktopOpen ? <ArrowBackIos /> : ''}
                    </button>
                </div>
                <nav className="mt-4">
                    <Link href="/dashboard" className="no-underline text-black">
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Home />
                            {isDesktopOpen && (
                                <span className="ml-4">Home</span>
                            )}
                        </div>
                    </Link>
                    <Link
                        href="/dashboard/blog"
                        className="no-underline text-black">
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Article />
                            {isDesktopOpen && (
                                <span className="ml-4">Blog</span>
                            )}
                        </div>
                    </Link>
                    <Link
                        href="/dashboard/job"
                        className="no-underline text-black">
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Work />
                            {isDesktopOpen && <span className="ml-4">Job</span>}
                        </div>
                    </Link>
                    <Link
                        href="/dashboard/newsletter"
                        className="no-underline text-black">
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Mail />
                            {isDesktopOpen && (
                                <span className="ml-4">Newsletter</span>
                            )}
                        </div>
                    </Link>
                </nav>
            </div>
            <div
                className={`lg:hidden fixed top-0 left-0 h-full bg-neutral-300 text-white z-40 transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:relative lg:translate-x-0 lg:w-64 w-64`}>
                <div className="p-4 flex justify-between items-center text-black">
                    <div className="lg:hidden block font-bold text-2xl">
                        Dashboard
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="focus:outline-none lg:hidden">
                        <ArrowBackIos />
                    </button>
                </div>
                <nav className="mt-4">
                    <Link
                        href="/dashboard"
                        className="no-underline text-black"
                        onClick={toggleSidebar}>
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Home />
                            <span className="ml-4">Home</span>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard/blog"
                        className="no-underline text-black"
                        onClick={toggleSidebar}>
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Article />
                            <span className="ml-4">Blog</span>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard/job"
                        className="no-underline text-black"
                        onClick={toggleSidebar}>
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Work />
                            <span className="ml-4">Job</span>
                        </div>
                    </Link>
                    <Link
                        href="/dashboard/newsletter"
                        className="no-underline text-black"
                        onClick={toggleSidebar}>
                        <div className="flex items-center block py-2.5 px-4 rounded transition duration-200 hover:bg-neutral-400">
                            <Mail />
                            <span className="ml-4">Newsletter</span>
                        </div>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Sidebar
