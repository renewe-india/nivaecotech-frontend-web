import Link from 'next/link'
import AuthCard from './AuthCard'
import Logo from '@/components/Logo' // Update the import statement and include the LogoProps type
import React, { ReactNode } from 'react'

export const metadata = {
    title: 'NivaEcotech',
}

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link
                            href="/"
                            className="no-underline text-black flex items-center space-x-2">
                            <Logo className="w-20 h-20 fill-current text-gray-500" />
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
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
