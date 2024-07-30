'use client'
import axios from '@/lib/axios'
import EditorJS from '@editorjs/editorjs'
import { useEffect, useState, useRef } from 'react'

export default function Editor() {
    const [isMounted, setIsMounted] = useState(false)
    const ref = useRef<EditorJS | null>(null)
    const [title, setTitle] = useState('')
    const [published_at, setPublished_at] = useState(() => {
        const today = new Date()
        const yyyy = today.getFullYear()
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const dd = String(today.getDate()).padStart(2, '0')
        return `${yyyy}-${mm}-${dd}`
    })

    const initializeEditor = async () => {
        const { default: EditorJS } = await import('@editorjs/editorjs')
        const { default: Header } = await import('@editorjs/header')
        const { default: List } = await import('@editorjs/list')
        const { default: Table } = await import('@editorjs/table')
        const { default: LinkTool } = await import('@editorjs/link')
        //  const { default: Embed } = await import('@editorjs/embed')
        const { default: SimpleImage } = await import('@editorjs/simple-image')
        const { default: Marker } = await import('@editorjs/marker')

        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'editorjs',
                tools: {
                    header: Header,
                    list: List,
                    table: Table,
                    linkTool: LinkTool,
                    //  embed: Embed,\
                    image: SimpleImage,
                    Marker: {
                        class: Marker,
                        shortcut: 'SHIFT+M',
                    },
                },
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
            await initializeEditor()
        }
        if (isMounted) {
            init()
            return () => {
                if (ref.current) {
                    ref.current.destroy()
                }
            }
        }
    }, [isMounted])

    const save = async () => {
        if (ref.current) {
            try {
                const output = await ref.current.save()
                // console.log(output.blocks)
                console.log(JSON.stringify(output))

                // Prepare the data to be sent
                const postData = {
                    title,
                    content: JSON.stringify(output),
                    published_at,
                }
                //console.log('Data saved successfully:', postData)
                const response = await axios.post(
                    'api/tenant/user/blog/articles',
                    postData,
                )

                console.log('Data saved successfully:', response.data)
            } catch (error) {
                console.error('Error saving data:', error)
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
                            <label htmlFor="name">Blog Title</label>
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
            <div className="sm:flex sm:items-end sm:justify-end ">
                <button
                    onClick={save}
                    className="no-underline rounded-xl block bg-textSecondary hover:bg-theme2-light mb-2 mr-2 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition ">
                    Save
                </button>
            </div>
        </>
    )
}
