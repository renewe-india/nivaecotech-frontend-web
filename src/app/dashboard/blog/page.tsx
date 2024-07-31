'use client'
import React, { useState, useEffect } from 'react'
import Table, { TableColumn } from '@/components/TableComponent'
import Link from 'next/link'
import { Add } from '@mui/icons-material'
import { useRouter, useSearchParams } from 'next/navigation'
import axios from '@/lib/axios'
import Modal from './Modal'
import LoadingError from './LoadingError'
import Pagination from '@/components/Pagination'

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

const columns: TableColumn<Blog>[] = [
    { header: 'Title', accessor: 'title', align: 'left' },
    { header: 'Author', accessor: 'author.name', align: 'left' },
    { header: 'Published Date', accessor: 'published_at', align: 'left' },
]

const BlogTable: React.FC = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [blogs, setBlogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [blogToDelete, setBlogToDelete] = useState<string | null>(null)

    const currentPage = parseInt(searchParams.get('page') || '1', 10)
    const [totalPages, setTotalPages] = useState<number>(1)

    useEffect(() => {
        const fetchBlogs = async (page: number) => {
            try {
                const response = await axios.get(
                    `api/tenant/user/blog/articles?page=${page}`,
                )
                const formattedBlogs = response.data.data.map((blog: Blog) => ({
                    ...blog,
                    published_at: formatDate(blog.published_at),
                }))
                setBlogs(formattedBlogs)
                setTotalPages(response.data.meta.last_page)
            } catch (error) {
                setError('Error fetching blogs')
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs(currentPage)
    }, [currentPage])

    const handleDelete = async (slug: string) => {
        try {
            await axios.delete(`api/tenant/user/blog/articles/${slug}`)
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.slug !== slug))
        } catch (error) {
            // Handle error appropriately
        }
    }

    const openModal = (slug: string) => {
        setBlogToDelete(slug)
        setShowModal(true)
    }

    const closeModal = () => {
        setBlogToDelete(null)
        setShowModal(false)
    }

    const confirmDelete = () => {
        if (blogToDelete !== null) {
            handleDelete(blogToDelete)
            closeModal()
        }
    }

    const handleEdit = (slug: string) => {
        router.push(`edit/${slug}`)
    }

    return (
        <>
            <div className={`p-4 ${showModal ? 'blur-sm' : ''}`}>
                <div className="flex flex-row items-center justify-between gap-10 mb-8">
                    <h1 className="text-3xl font-bold">Blog Listings</h1>
                    <Link href="create" className="no-underline">
                        <div className="p-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-neutral-300 disabled:opacity-50 disabled:pointer-events-none ml-4">
                            <Add fontSize="small" />
                            New
                        </div>
                    </Link>
                </div>

                <LoadingError loading={loading} error={error} data={blogs}>
                    <div className="overflow-x-auto">
                        <Table
                            columns={columns}
                            data={blogs}
                            onDelete={openModal}
                            onEdit={handleEdit}
                        />
                    </div>
                </LoadingError>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    baseUrl="/dashboard/blog"
                />
            </div>

            {showModal && (
                <Modal
                    title="Are you sure you want to delete this blog?"
                    onConfirm={confirmDelete}
                    onCancel={closeModal}
                />
            )}
        </>
    )
}

export default BlogTable
