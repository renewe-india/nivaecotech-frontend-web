'use client'

import React from 'react'
import Link from 'next/link'

const page: React.FC = () => {
    // Sample data
    const blogPosts = [
        {
            id: 1,
            title: 'Blog Post 1',
            description: 'A brief description of blog post 1.',
            author: 'Author 1',
            date: '2024-07-01',
        },
        {
            id: 2,
            title: 'Blog Post 2',
            description: 'A brief description of blog post 2.',
            author: 'Author 2',
            date: '2024-07-02',
        },
        {
            id: 3,
            title: 'Blog Post 3',
            description: 'A brief description of blog post 3.',
            author: 'Author 3',
            date: '2024-07-03',
        },
    ]

    const jobPosts = [
        {
            id: 1,
            title: 'Job Post 1',
            description: 'A brief description of job post 1.',
            company: 'Company 1',
            date: '2024-07-01',
        },
        {
            id: 2,
            title: 'Job Post 2',
            description: 'A brief description of job post 2.',
            company: 'Company 2',
            date: '2024-07-02',
        },
        {
            id: 3,
            title: 'Job Post 3',
            description: 'A brief description of job post 3.',
            company: 'Company 3',
            date: '2024-07-03',
        },
    ]

    const newsletters = [
        {
            id: 1,
            title: 'Newsletter 1',
            description: 'A brief description of newsletter 1.',
            issue: 'Issue 1',
            date: '2024-07-01',
        },
        {
            id: 2,
            title: 'Newsletter 2',
            description: 'A brief description of newsletter 2.',
            issue: 'Issue 2',
            date: '2024-07-02',
        },
        {
            id: 3,
            title: 'Newsletter 3',
            description: 'A brief description of newsletter 3.',
            issue: 'Issue 3',
            date: '2024-07-03',
        },
    ]

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white gradient-border shadow rounded">
                    <h2 className="text-2xl font-semibold mb-4">Blog</h2>
                    <ul>
                        {blogPosts.map(post => (
                            <li key={post.id} className="mb-4">
                                <Link
                                    href={`/dashboard/blog/${post.id}`}
                                    className="no-underline text-black">
                                    <h3 className="text-xl font-bold">
                                        {post.title}
                                    </h3>
                                    <p>{post.description}</p>
                                    <p className="text-sm text-gray-500">
                                        By {post.author} on {post.date}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-4 bg-white gradient-border shadow rounded">
                    <h2 className="text-2xl font-semibold mb-4">Job</h2>
                    <ul>
                        {jobPosts.map(post => (
                            <li key={post.id} className="mb-4">
                                <Link
                                    href={`/dashboard/job/${post.id}`}
                                    className="no-underline text-black">
                                    <h3 className="text-xl font-bold">
                                        {post.title}
                                    </h3>
                                    <p>{post.description}</p>
                                    <p className="text-sm text-gray-500">
                                        At {post.company} on {post.date}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-4 bg-white gradient-border shadow rounded">
                    <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
                    <ul>
                        {newsletters.map(post => (
                            <li key={post.id} className="mb-4">
                                <Link
                                    href={`/dashboard/newsletter/${post.id}`}
                                    className="no-underline text-black">
                                    <h3 className="text-xl font-bold">
                                        {post.title}
                                    </h3>
                                    <p>{post.description}</p>
                                    <p className="text-sm text-gray-500">
                                        Issue: {post.issue} on {post.date}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page
