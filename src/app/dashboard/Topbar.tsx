'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Menu } from '@mui/icons-material'
import { Avatar, Menu as MuiMenu, MenuItem } from '@mui/material'
import Image from 'next/image'
import Logo from '@/components/Logo'
import { useAuth } from '@/hooks/auth'

interface User {
    blood_group: string
    created_at: string
    date_of_birth: string
    date_of_joining: string | null
    date_of_reliving: string | null
    department: string
    designation: string
    email: string
    email_verified_at: string | null
    id: number
    mobile: string | null
    mobile_verified_at: string | null
    name: string
    role: string
    team_sequence: number
    updated_at: string
    username: string
}

interface TopbarProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    user: User
}

const Topbar: React.FC<TopbarProps> = ({ isOpen, setIsOpen, user }) => {
    const { logout } = useAuth()
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const handleProfileView = () => {
        router.push('/dashboard/profile')
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }
    function stringToColor(string: string) {
        let hash = 0
        let i

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash)
        }

        let color = '#'

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff
            color += `00${value.toString(16)}`.slice(-2)
        }
        /* eslint-enable no-bitwise */

        return color
    }

    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        }
    }
    return (
        <div className="flex justify-between items-center bg-gray-200 p-4">
            <Link
                href="/"
                className="hidden lg:flex no-underline text-black items-center space-x-2">
                <Image
                    src="/Logo.svg"
                    alt="logo"
                    width={54}
                    height={18}
                    priority
                    unoptimized
                />
                <div className="flex flex-col items-center ">
                    <div className=" pr-5 ">
                        <p className="font-extrabold text-lg m-0 capitalize">
                            NIVA ECOTECH PVT. LTD.
                        </p>
                        <p className="m-0 text-xs">
                            Committed to ecological revolution
                        </p>
                    </div>
                </div>
            </Link>
            <button
                onClick={toggleSidebar}
                className="lg:hidden block focus:outline-none text-black">
                <Menu />
            </button>
            <Link
                href="/"
                className="lg:hidden flex no-underline text-black items-center space-x-2">
                <Logo className="lg:hidden w-10 h-10 fill-current" />
                <div className="flex flex-col items-center ">
                    <div className=" pr-5 ">
                        <p className="font-extrabold text-base m-0 capitalize">
                            NIVA ECOTECH
                        </p>
                    </div>
                </div>
            </Link>
            <div className="flex items-center space-x-4">
                <Avatar
                    alt={user?.name}
                    {...stringAvatar(`${user?.name}`)}
                    onClick={handleMenuOpen}
                    className="cursor-pointer"
                />

                <MuiMenu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}>
                    <MenuItem>Hey! {user?.name}</MenuItem>
                    <MenuItem onClick={handleProfileView}>Profile</MenuItem>
                    <MenuItem onClick={logout}>Logout</MenuItem>
                </MuiMenu>
            </div>
        </div>
    )
}

export default Topbar
