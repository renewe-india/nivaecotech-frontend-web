'use client'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import React, { createRef } from 'react'

const InstanceEditor: React.FC = () => {
    const editorRef = createRef<Editor>()
    const handleFocus = () => {}

    const handleSubmit = async () => {
        if (editorRef.current) {
            // const editorInstance = editorRef.current.getInstance()
            //const markdownContent = editorInstance.getMarkdown()
            //console.log(markdownContent)
            //     try {
            //         const response = await fetch('/api/save-content', {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //             },
            //             body: JSON.stringify({ content: markdownContent }),
            //         })
            //         if (response.ok) {
            //             console.log('Content saved successfully')
            //         } else {
            //             console.error('Failed to save content')
            //         }
            //     } catch (error) {
            //         console.error('Error:', error)
            //     }
        }
    }

    return (
        <>
            <Editor
                previewStyle="vertical"
                height="400px"
                initialEditType="wysiwyg"
                initialValue="hello"
                ref={editorRef}
                onFocus={handleFocus}
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-theme2-light text-white rounded">
                Save Content
            </button>
        </>
    )
}

export default InstanceEditor
