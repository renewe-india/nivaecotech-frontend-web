'use client'
import React, { useState } from 'react'
import Table, { TableColumn } from '@/components/TableComponent'
import Link from 'next/link'
import { Add, Clear, FileDownloadDone } from '@mui/icons-material'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Blog {
    id: number
    name: string
    date: string
    description: string
}

const initialBlogs: Blog[] = [
    {
        id: 1,
        name: 'CAPEX Solar Projects',
        date: 'Jun 3, 2024',
        description:
            'In the CAPEX (Capital Expenditure) model for solar installations, the consumer pays the total upfront cost for the solar system. This ownership grants access to tax benefits and depreciation...',
    },
    {
        id: 2,
        name: 'Investing in Tomorrow: How Turnkey EPC Projects Shape India',
        date: 'Jun 17, 2024',
        description:
            "India's trajectory towards becoming an infrastructural powerhouse is increasingly being shaped by the strategic implementation of turnkey Engineering, Procurement, and...",
    },
    {
        id: 3,
        name: 'Solar Simplified: A Comprehensive Guide to Turnkey EPC Services in India',
        date: 'Jun 10, 2024',
        description:
            'As India embraces renewable energy, solar power stands at the forefront of sustainable solutions. For clients seeking hassle-free solar installations, Turnkey EPC (Engineering, Procuremen...',
    },
]

const columns: TableColumn<Blog>[] = [
    { header: 'Name', accessor: 'name', align: 'left' },
    { header: 'Published Date', accessor: 'date', align: 'left' },
    { header: 'Description', accessor: 'description', align: 'left' },
]

const BlogTable: React.FC = () => {
    const router = useRouter()
    const [blogs, setBlogs] = useState(initialBlogs)
    const [showModal, setShowModal] = useState(false)
    const [blogToDelete, setBlogToDelete] = useState<number | null>(null)

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`/api/blog/staff/articles/${id}`)
            setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id))
        } catch (error) {
            console.error('Error deleting blog:', error)
        }
    }

    const openModal = (id: number) => {
        setBlogToDelete(id)
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

    const handleEdit = (id: number) => {
        router.push('edit')
        console.log('Edit blog with id:', id)
    }

    return (
        <>
            <div className={`p-4 ${showModal ? 'blur-sm' : ''}`}>
                <div className="flex flex-row items-center justify-between gap-10 mb-8">
                    <h1 className="text-3xl font-bold">Blog Listings</h1>
                    <Link href="create" className="no-underline">
                        <div className="p-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-black  hover:bg-neutral-300 disabled:opacity-50 disabled:pointer-events-none  ml-4">
                            <Add fontSize="small" />
                            New
                        </div>
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <Table
                        columns={columns}
                        data={blogs}
                        onDelete={openModal}
                        onEdit={handleEdit}
                    />
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white m-5 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">
                            Are you sure you want to delete this blog?
                        </h2>
                        <div className="flex justify-end">
                            <button
                                className="text-red-600 hover:text-white hover:bg-red-800 font-bold rounded px-4 py-2 mr-2"
                                onClick={closeModal}>
                                <FileDownloadDone fontSize="small" />
                                Yes
                            </button>
                            <button
                                className="text-blue-600 hover:text-white hover:bg-blue-800 font-bold rounded px-4 py-2"
                                onClick={confirmDelete}>
                                <Clear fontSize="small" />
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogTable
