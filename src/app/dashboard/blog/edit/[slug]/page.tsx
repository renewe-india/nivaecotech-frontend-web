'use client'
import React, { useEffect, useState } from 'react'
import EditorComponent from '../../EditorComponent'
import axios from '@/lib/axios'
import Loading from '@/components/Loading'
import { useRouter } from 'next/navigation'

interface EditBlogProps {
    params: any
}

const EditBlog: React.FC<EditBlogProps> = ({ params }) => {
    const router = useRouter()
    const slug = params.slug
    const [title, setTitle] = useState('')
    const [published_at, setPublished_at] = useState('')
    const [initialContent, setInitialContent] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        const yyyy = date.getFullYear()
        const mm = String(date.getMonth() + 1).padStart(2, '0')
        const dd = String(date.getDate()).padStart(2, '0')
        return `${yyyy}-${mm}-${dd}`
    }
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(
                    `api/tenant/user/blog/articles/${slug}`,
                )
                const blog = response.data.data
                setTitle(blog.title)
                setPublished_at(formatDate(blog.published_at))
                setInitialContent(blog.content)

                setTimeout(() => setIsLoading(false), 1000)
            } catch (error) {
                setIsLoading(false)
            }
        }
        if (slug) fetchBlog()
    }, [slug])

    const handleSave = async (data: {
        title: string
        content: string
        published_at: string
    }) => {
        try {
            await axios.patch(`api/tenant/user/blog/articles/${slug}`, data)
            router.push('/dashboard/blog')
        } catch (error) {
            //  console.error('Error saving data:', error)
        }
    }

    return (
        <>
            {isLoading ? (
                <Loading /> // You can replace this with a spinner or loading indicator
            ) : (
                <EditorComponent
                    title={title}
                    setTitle={setTitle}
                    published_at={published_at}
                    setPublished_at={setPublished_at}
                    initialContent={initialContent}
                    onSave={handleSave}
                />
            )}
        </>
    )
}

export default EditBlog
