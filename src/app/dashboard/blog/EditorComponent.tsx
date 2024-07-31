'use client'
import EditorJS from '@editorjs/editorjs'
import { useEffect, useState, useRef } from 'react'

interface EditorComponentProps {
    title: string
    setTitle: (title: string) => void
    published_at: string
    setPublished_at: (date: string) => void
    initialContent: any
    onSave: (data: {
        title: string
        content: string
        published_at: string
    }) => void
}

const EditorComponent: React.FC<EditorComponentProps> = ({
    title,
    setTitle,
    published_at,
    setPublished_at,
    initialContent,
    onSave,
}) => {
    const [isMounted, setIsMounted] = useState(false)
    const ref = useRef<EditorJS | null>(null)

    const initializeEditor = async (content: any) => {
        const { default: EditorJS } = await import('@editorjs/editorjs')
        const { default: Header } = await import('@editorjs/header')
        const { default: List } = await import('@editorjs/list')
        const { default: Table } = await import('@editorjs/table')
        const { default: LinkTool } = await import('@editorjs/link')
        const { default: SimpleImage } = await import('@editorjs/simple-image')
        const { default: Marker } = await import('@editorjs/marker')

        let parsedContent
        try {
            parsedContent = content ? JSON.parse(content) : undefined
        } catch (e) {
            parsedContent = undefined
        }

        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'editorjs',
                tools: {
                    header: Header,
                    list: List,
                    table: Table,
                    linkTool: LinkTool,
                    image: SimpleImage,
                    Marker: {
                        class: Marker,
                        shortcut: 'SHIFT+M',
                    },
                },
                data: parsedContent,
            })
            ref.current = editor
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMounted(true)
        }
    }, [])

    useEffect(() => {
        const init = async () => {
            await initializeEditor(initialContent)
        }
        if (isMounted) {
            init()
            return () => {
                if (ref.current) {
                    ref.current.destroy()
                }
            }
        }
    }, [isMounted, initialContent])

    const save = async () => {
        if (ref.current) {
            try {
                const output = await ref.current.save()
                onSave({
                    title,
                    content: JSON.stringify(output),
                    published_at,
                })
            } catch (error) {
                // console.error('Error saving data:', error)
            }
        }
    }

    return (
        <>
            <form>
                <div className="row g-3">
                    <div className="col-md-12">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="Title"
                                placeholder="Blog Title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                            <label htmlFor="Title">Blog Title</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-floating">
                        <input
                            type="date"
                            className="form-control"
                            id="Date"
                            placeholder="Blog Date"
                            value={published_at}
                            onChange={e => setPublished_at(e.target.value)}
                            required
                        />
                        <label htmlFor="Date">Blog Date</label>
                    </div>
                </div>
            </form>
            <div id="editorjs" className="container max-w-full h-full" />
            <div className="sm:flex sm:items-end sm:justify-end">
                <button
                    onClick={save}
                    className="no-underline rounded-xl block bg-textSecondary hover:bg-theme2-light mb-2 mr-2 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition">
                    Save
                </button>
            </div>
        </>
    )
}

export default EditorComponent
