import React from 'react'
import { Clear, FileDownloadDone } from '@mui/icons-material'

interface ModalProps {
    title: string
    onConfirm: () => void
    onCancel: () => void
}

const Modal: React.FC<ModalProps> = ({ title, onConfirm, onCancel }) => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white m-5 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="flex justify-end">
                <button
                    className="text-red-600 hover:text-white hover:bg-red-800 font-bold rounded px-4 py-2 mr-2"
                    onClick={onConfirm}>
                    <FileDownloadDone fontSize="small" />
                    Yes
                </button>
                <button
                    className="text-blue-600 hover:text-white hover:bg-blue-800 font-bold rounded px-4 py-2"
                    onClick={onCancel}>
                    <Clear fontSize="small" />
                    No
                </button>
            </div>
        </div>
    </div>
)

export default Modal
