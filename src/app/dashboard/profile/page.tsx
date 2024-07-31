'use client'
import Loading from '@/components/Loading'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const Profile: React.FC = () => {
    const { user } = useAuth()

    if (!user) {
        return <Loading />
    }

    return (
        <div className="p-4 bg-white shadow rounded">
            <div className="text-3xl font-bold mb-4">Profile</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">Name:</h3>
                        <p className="text-gray-700 mb-0">{user.name}</p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Username:
                        </h3>
                        <p className="text-gray-700 mb-0">{user.username}</p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">Email:</h3>
                        <p className="text-gray-700 mb-0">{user.email}</p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">Role:</h3>
                        <p className="text-gray-700 mb-0">{user.role}</p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Designation:
                        </h3>
                        <p className="text-gray-700 mb-0">{user.designation}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Department:
                        </h3>
                        <p className="text-gray-700 mb-0">
                            {user.department || 'N/A'}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Blood Group:
                        </h3>
                        <p className="text-gray-700 mb-0">
                            {user.blood_group || 'N/A'}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Date of Birth:
                        </h3>
                        <p className="text-gray-700 mb-0">
                            {new Date(
                                user.date_of_birth || 'N/A',
                            ).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Date of Joining:
                        </h3>
                        <p className="text-gray-700 mb-0">
                            {user.date_of_joining || 'N/A'}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold mr-2">
                            Date of Relieving:
                        </h3>
                        <p className="text-gray-700 mb-0">
                            {user.date_of_reliving || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
