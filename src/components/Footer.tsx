import React from 'react'
import Image from 'next/image'
import {
    ArrowForward,
    Facebook,
    LinkedIn,
    Mail,
    Phone,
    Place,
} from '@mui/icons-material'
import Link from 'next/link'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <a href="/" className="no-underline text-black m-0 p-0">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/Logo.svg"
                                    alt="logo"
                                    width={66}
                                    height={22}
                                    priority
                                    unoptimized
                                />
                                <div className="flex flex-col items-center ">
                                    <div className=" pr-5 ">
                                        <p className="font-extrabold text-xl m-0 capitalize">
                                            NIVA ECOTECH PVT. LTD.
                                        </p>
                                        <p className="m-0 text-sm">
                                            Committed to ecological revolution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <p className="mt-4 max-w-md text-center leading-relaxed text-gray-500 sm:text-left lg:mt-0">
                        &quot;Empowering Your Future with Sustainable
                        Excellence&quot;
                    </p>
                </div>

                <div className="mt-16  grid grid-cols-1 gap-8 border-t border-gray-100 pt-16 md:grid-cols-4 lg:grid-cols-5">
                    <div className="text-left sm:text-left">
                        <p className="text-lg font-medium text-gray-900">
                            About Us
                        </p>

                        <ul className="mt-8 space-y-4 text-sm p-0">
                            <li className="mb-2 d-flex ">
                                <Place fontSize="medium" className=" mr-2" />
                                <p className="text-gray-700 mb-0 transition hover:text-gray-700/75">
                                    16/6 Pinnac Apartment, Ground Floor, Vakil
                                    Nagar, Erandwane, Pune, Maharashtra, India,
                                    411004
                                </p>
                            </li>

                            <li className="mb-2 ">
                                <a
                                    href="tel:+919890993201"
                                    className="text-black no-underline d-flex align-items-center">
                                    <Phone
                                        fontSize="medium"
                                        className=" mr-2"
                                    />
                                    <p className="text-gray-700 mb-0 transition hover:text-gray-700/75">
                                        +91 9890993201
                                    </p>
                                </a>
                            </li>

                            <li className="mb-2 flex items-center">
                                <a
                                    href="mailto:info@nivaecotech.com?subject=Me&body=Hello!"
                                    className="text-black no-underline flex items-center">
                                    <Mail fontSize="medium" className="mr-2" />
                                    <p className="text-gray-700 mb-0 transition hover:text-gray-700/75">
                                        info@nivaecotech.com
                                    </p>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.facebook.com/nivaecotech"
                                    target="_blank"
                                    rel="noreferrer">
                                    <Facebook
                                        fontSize="medium"
                                        className="text-black"
                                    />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/niva-ecotech-pvt-ltd/people/"
                                    target="_blank"
                                    rel="noreferrer">
                                    <LinkedIn
                                        fontSize="medium"
                                        className="text-black"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-left  sm:text-left">
                        <p className="text-lg font-medium text-gray-900">
                            Links
                        </p>

                        <ul className="mt-8 space-y-4 text-sm p-0">
                            <li>
                                <a
                                    className="text-gray-700 no-underline transition hover:text-gray-700/75"
                                    href="#">
                                    Press Releases
                                </a>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-700 no-underline transition hover:text-gray-700/75"
                                    href="/blogs">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-gray-700 no-underline transition hover:text-gray-700/75"
                                    href="/download-center">
                                    Download Center
                                </Link>
                            </li>
                            <li>
                                <a
                                    className="text-gray-700 no-underline transition hover:text-gray-700/75"
                                    href="#">
                                    Company Brochures
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-left sm:text-left">
                        <p className="text-lg font-medium text-gray-900">
                            Know More
                        </p>

                        <ul className="mt-8 space-y-4 text-sm p-0">
                            <li>
                                <a
                                    className="text-gray-700 no-underline transition hover:text-gray-700/75"
                                    href="#">
                                    Job Opportunities
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-left sm:text-left md:col-span-4 lg:col-span-2">
                        <p className="text-lg font-medium text-gray-900">
                            Stay in Touch
                        </p>

                        <div className="mx-auto mt-8 max-w-md sm:ms-0">
                            <p className="text-left leading-relaxed text-gray-500 ltr:sm:text-left rtl:sm:text-right">
                                Dont worry, we won&apos;t spam.
                            </p>

                            <form className="mt-4">
                                <div className="flex flex-row gap-4 sm:flex-row lg:flex-col lg:items-start">
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        className="w-full rounded border-gray-200 px-6 py-3 shadow-sm"
                                        type="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        autoComplete="email"
                                    />

                                    <button
                                        className="bg-theme1-light hover:bg-theme1-dark text-white rounded px-3 py-3"
                                        type="submit">
                                        <ArrowForward fontSize="medium" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between">
                    <p className="text-center text-sm text-gray-500 sm:text-left">
                        Copyright &copy; Niva Ecotech Private Limited 2024. All
                        rights reserved.
                    </p>

                    <ul className="mt-4 flex p-0 justify-center gap-6 sm:mt-0 sm:justify-start">
                        <li>
                            <a
                                className="text-gray-700 no-underline transition hover:text-gray-700/75"
                                href="https://renewe.in/">
                                Designed by
                                <div style={{ width: 90, height: 30 }}>
                                    <Image
                                        src="/Renewe.png"
                                        alt="logo"
                                        className="responsive"
                                        width={90}
                                        height={30}
                                        priority
                                    />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
