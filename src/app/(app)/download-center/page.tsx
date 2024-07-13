'use client'
import React from 'react'

type File = {
    url: string
    name: string
}

const Branding: File[] = [
    { url: '/brain.jpg', name: 'Logo JPG' },
    { url: '/path/to/file2.pdf', name: 'Logo CDR' },
    { url: '/path/to/file3.pdf', name: 'Logo Short' },
]
const Company: File[] = [
    { url: '/brain.jpg', name: 'Profile' },
    { url: '/path/to/file2.pdf', name: 'Investor T&C' },
    { url: '/path/to/file3.pdf', name: 'Client T&C' },
]

const DownloadSection: React.FC = () => {
    const handleDownload = (fileUrl: string, fileName: string) => {
        const link = document.createElement('a')
        link.href = fileUrl
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/stars.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                    <div className="flex flex-row align-items-center  gap-10">
                        <h1 className="display-5 text-white animated slideInDown">
                            Download center
                        </h1>
                    </div>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <h6 className="text-textPrimary text-left text-uppercase font-bold">
                        Access everything you need a hub of hassle-free
                        possibilities.
                    </h6>
                    <h1 className="font-semibold text-left my-3">Branding</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Branding.map((file, index) => (
                            <div key={index} className="p-4 border rounded-xl">
                                <h3>{file.name}</h3>
                                <button
                                    className="mt-2 px-4 py-2 bg-theme2-light hover:bg-theme2-dark text-white rounded"
                                    onClick={() =>
                                        handleDownload(file.url, file.name)
                                    }>
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                    <h1 className="font-semibold text-left my-3">Company</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Company.map((file, index) => (
                            <div key={index} className="p-4 border rounded-xl">
                                <h3>{file.name}</h3>
                                <button
                                    className="mt-2 px-4 py-2 bg-theme2-light hover:bg-theme2-dark text-white rounded"
                                    onClick={() =>
                                        handleDownload(file.url, file.name)
                                    }>
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadSection
