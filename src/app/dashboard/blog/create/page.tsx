'use client'
import React, { useState, useEffect } from 'react'
import EditorComponent from '../EditorComponent'
import axios from '@/lib/axios'
import Loading from '@/components/Loading'
import { useRouter } from 'next/navigation'

const CreateBlog: React.FC = () => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const initialContent = `{
    "time": 1722345953820,
    "blocks": [
        {
            "id": "kDBeX0VLMj",
            "type": "header",
            "data": {
                "text": "Hey! ",
                "level": 2
            }
        },
        {
            "id": "kDBeX0VLMk",
            "type": "paragraph",
            "data": {
                "text": "Welcome Back."
            }
        }
    ],
    "version": "2.30.2"
}`
    const [published_at, setPublished_at] = useState(() => {
        const today = new Date()
        const yyyy = today.getFullYear()
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const dd = String(today.getDate()).padStart(2, '0')
        return `${yyyy}-${mm}-${dd}`
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const handleSave = async (data: {
        title: string
        content: string
        published_at: string
    }) => {
        try {
            await axios.post('api/tenant/user/blog/articles', data)
        } catch (error) {
            // console.error('Error saving data:', error)
        }
        router.push('/dashboard/blog')
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <EditorComponent
                    title={title}
                    setTitle={setTitle}
                    initialContent={initialContent}
                    published_at={published_at}
                    setPublished_at={setPublished_at}
                    onSave={handleSave}
                />
            )}
        </>
    )
}

export default CreateBlog
