'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LoadingError from './blog/LoadingError'
import axios from '@/lib/axios'
import Image from 'next/image'
interface Blog {
    id: number
    slug: string
    title: string
    published_at: string
    is_author: boolean
    permissions: {
        view: boolean
        update: boolean
        delete: boolean
    }
    author: {
        name: string
        username: string
        email: string
        role: string
        designation: string
        department: string
    }
}
const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })
}
const page: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(
                    'api/tenant/user/blog/articles',
                )
                const formattedBlogs = response.data.data.map((blog: Blog) => ({
                    ...blog,
                    published_at: formatDate(blog.published_at),
                }))
                setBlogs(formattedBlogs)
            } catch (error) {
                setError('Error fetching blogs')
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs()
    }, [])
    // Sample data

    return (
        <div className="lg:p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white gradient-border shadow rounded">
                    <h2 className="text-2xl font-bold mb-4">Blog</h2>
                    <ul className="list-disc ">
                        <LoadingError
                            loading={loading}
                            error={error}
                            data={blogs}>
                            {blogs.map(blog => (
                                <li key={blog.id} className="mb-4">
                                    <Link
                                        href={`/dashboard/blog/view/${blog.slug}`}
                                        className="no-underline text-black">
                                        <h3 className="text-xl font-semibold">
                                            {blog.title}
                                        </h3>

                                        <p className="text-sm text-gray-500">
                                            By{' '}
                                            <span className="font-semibold">
                                                {blog.author.name}
                                            </span>{' '}
                                            on{' '}
                                            <span className="font-semibold">
                                                {blog.published_at}
                                            </span>
                                        </p>
                                    </Link>
                                </li>
                            ))}{' '}
                        </LoadingError>
                    </ul>
                </div>

                <div className="p-4  bg-white gradient-border shadow rounded">
                    <h2 className="text-2xl font-bold mb-4">Job</h2>
                    <div className="flex flex-col items-center py-5 justify-center h-full">
                        <span className="text-black font-semibold">
                            We are working on this part!
                        </span>
                        <Image
                            src="/undraw_under_construction_-46-pa.svg"
                            alt="under_construction"
                            width={900}
                            height={300}
                            priority
                            unoptimized
                        />
                    </div>
                </div>

                <div className="p-4  bg-white gradient-border shadow rounded">
                    <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
                    <div className="flex flex-col items-center py-5 justify-center h-full">
                        <span className="text-black font-semibold">
                            We are working on this part!
                        </span>
                        <Image
                            src="/undraw_under_construction_-46-pa.svg"
                            alt="under_construction"
                            width={900}
                            height={300}
                            priority
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
