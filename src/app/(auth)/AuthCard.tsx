import React from 'react'

const AuthCard = ({
    logo,
    children,
}: {
    logo: any
    children: React.ReactNode
}) => (
    <React.Fragment>
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>{logo}</div>

            <div className="lg:w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    </React.Fragment>
)

export default AuthCard
