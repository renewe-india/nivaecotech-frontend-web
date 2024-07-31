'use client'
import EditorOutput from '@/components/EditorJsOutput'
import Loading from '@/components/Loading'
import axios from '@/lib/axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Blog {
    title: string
    published_at: string
    content: any
    author: {
        name: string
        username: string
        email: string
        role: string
        designation: string
        department: string
    }
}

interface ViewBlogProps {
    params: {
        slug: string
    }
}

const ViewBlog: React.FC<ViewBlogProps> = ({ params }) => {
    const slug = params.slug
    const [blog, setBlog] = useState<Blog | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(
                    `api/tenant/blog/articles/${slug}`,
                )
                const blogData = response.data.data
                setBlog(blogData)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        if (slug) fetchBlog()
    }, [slug])

    if (isLoading) {
        return <Loading />
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    }

    return (
        <>
            {blog && (
                <>
                    {' '}
                    <div className="px-4">
                        <Image
                            src="/blogs/turnkey-epc-services.jpg"
                            alt={blog.title}
                            width={100}
                            height={10}
                            className="rounded-2xl w-full h-full"
                        />
                    </div>
                    <div className="mx-auto max-w-screen-2xl px-0 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div>
                            <div className="px-4 text-center">
                                <hr className="w-full h-3 mx-auto bg-black border-0 rounded dark:bg-gray-700" />
                                <div className="flex flex-row items-center gap-10">
                                    <h1 className="lg:text-7xl font-semibold text-gray-900 animated slideInDown lg:mx-5">
                                        {blog.title}
                                    </h1>
                                </div>
                                <hr className="w-full h-3 mx-auto bg-black border-0 rounded dark:bg-gray-700" />
                            </div>
                            <div className="text-xl lg:flex items-center gap-2">
                                <div className="flex items-center gap-2 px-10  text-gray-900">
                                    <span className="font-semibold">
                                        Author:
                                    </span>
                                    <span>{blog.author.name}</span>
                                </div>

                                <div className="flex items-center gap-2 px-10  text-gray-900">
                                    <span className="font-semibold">Date:</span>
                                    <span>{formatDate(blog.published_at)}</span>
                                </div>
                            </div>
                            <div className="p-10">
                                <EditorOutput
                                    content={JSON.parse(blog.content)}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ViewBlog
