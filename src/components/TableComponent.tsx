import { Delete, DriveFileRenameOutline } from '@mui/icons-material'
import React from 'react'
import Link from 'next/link'

export interface TableColumn<T> {
    header: string
    accessor: string
    align: 'left' | 'right' | 'center'
}

interface TableProps<T> {
    columns: TableColumn<T>[]
    data: T[]
    onDelete: (slug: string) => void
    onEdit: (slug: string) => void
}

interface TableData {
    slug: string
    id: number
    title: string
    published_at: string
    is_author: boolean
    permissions: {
        view: boolean
        update: boolean
        delete: boolean
    }
}

const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}

const Table = <T extends TableData>({
    columns,
    data,
    onDelete,
    onEdit,
}: TableProps<T>) => {
    // Check if any item has update or delete permissions
    const showActionHeader = data.some(
        item => item.permissions.update || item.permissions.delete,
    )

    return (
        <div className="flex flex-col max-w-full">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <div className="w-60 md:w-full lg:w-full overflow-x-auto lg:overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                            <thead>
                                <tr>
                                    {columns.map(column => (
                                        <th
                                            key={column.header}
                                            scope="col"
                                            className={`px-6 py-3 text-${column.align} text-xs font-medium text-gray-500 uppercase dark:text-neutral-500`}>
                                            {column.header}
                                        </th>
                                    ))}
                                    {showActionHeader && (
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                            Action
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {data.map(item => (
                                    <tr key={item.slug}>
                                        {columns.map(column => (
                                            <td
                                                key={column.header}
                                                className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-${column.align} overflow-hidden overflow-ellipsis`}
                                                style={{ maxWidth: '150px' }}>
                                                {column.accessor === 'title' &&
                                                item.permissions.view ? (
                                                    <Link
                                                        href={`/dashboard/blog/view/${item.slug}`}
                                                        passHref
                                                        className="no-underline text-black">
                                                        <div className=" hover:underline">
                                                            {
                                                                getNestedValue(
                                                                    item,
                                                                    column.accessor,
                                                                ) as React.ReactNode
                                                            }
                                                        </div>
                                                    </Link>
                                                ) : (
                                                    (getNestedValue(
                                                        item,
                                                        column.accessor,
                                                    ) as React.ReactNode)
                                                )}
                                            </td>
                                        ))}
                                        {showActionHeader && (
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                {item.permissions.update && (
                                                    <button
                                                        type="button"
                                                        className="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-white hover:bg-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                                        onClick={() =>
                                                            onEdit(item.slug)
                                                        }>
                                                        <DriveFileRenameOutline fontSize="small" />
                                                        <span className="hidden lg:block">
                                                            Edit
                                                        </span>
                                                    </button>
                                                )}
                                                {item.permissions.delete && (
                                                    <button
                                                        type="button"
                                                        className="p-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-white hover:bg-red-800 disabled:opacity-50 disabled:pointer-events-none ml-4"
                                                        onClick={() =>
                                                            onDelete(item.slug)
                                                        }>
                                                        <Delete fontSize="small" />
                                                        <span className="hidden lg:block">
                                                            Delete
                                                        </span>
                                                    </button>
                                                )}
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
