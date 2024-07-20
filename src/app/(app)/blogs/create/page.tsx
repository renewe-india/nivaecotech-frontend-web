'use client'
import EditorJS from '@editorjs/editorjs'
import { useEffect, useState, useRef } from 'react'

export default function Editor() {
    const [isMounted, setIsMounted] = useState(false)
    const ref = useRef<EditorJS | null>(null)

    const initializeEditor = async () => {
        const { default: EditorJS } = await import('@editorjs/editorjs')
        const { default: Header } = await import('@editorjs/header')
        const { default: List } = await import('@editorjs/list')
        const { default: Table } = await import('@editorjs/table')

        if (!ref.current) {
            const editor = new EditorJS({
                holder: 'editorjs',
                tools: {
                    header: Header,
                    list: List,
                    table: Table,
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
            ref.current.save().then(output => {
                console.log(output)
                console.log(JSON.stringify(output))
            })
        }
    }
    return (
        <>
            <div id="editorjs" className="container max-w-full min-h-screen" />
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
