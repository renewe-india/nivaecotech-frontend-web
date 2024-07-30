// Table.tsx
import { Delete, DriveFileRenameOutline } from '@mui/icons-material'
import React from 'react'

export interface TableColumn<T> {
    header: string
    accessor: keyof T
    align: 'left' | 'right' | 'center'
}

interface TableProps<T> {
    columns: TableColumn<T>[]
    data: T[]
    onDelete: (id: number) => void
    onEdit: (id: number) => void
}

const Table = <T extends { id: number }>({
    columns,
    data,
    onDelete,
    onEdit,
}: TableProps<T>) => {
    return (
        <div className="flex flex-col max-w-full">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <div className="w-60 md:w-full lg:w-full overflow-x-auto lg:overflow-hidden">
                        {' '}
                        {/* Set a fixed height here */}
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
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                {data.map(item => (
                                    <tr key={item.id}>
                                        {columns.map(column => (
                                            <td
                                                key={column.header}
                                                className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200 text-${column.align} overflow-hidden overflow-ellipsis`}
                                                style={{ maxWidth: '150px' }} // Adjust max-width as needed
                                            >
                                                {
                                                    item[
                                                        column.accessor
                                                    ] as React.ReactNode
                                                }
                                            </td>
                                        ))}
                                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                            <button
                                                type="button"
                                                className="p-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-white hover:bg-blue-800  disabled:opacity-50 disabled:pointer-events-none "
                                                onClick={() => onEdit(item.id)}>
                                                <DriveFileRenameOutline fontSize="small" />{' '}
                                                <span className="hidden lg:block">
                                                    Edit
                                                </span>
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-white hover:bg-red-800 disabled:opacity-50 disabled:pointer-events-none  ml-4"
                                                onClick={() =>
                                                    onDelete(item.id)
                                                }>
                                                <Delete fontSize="small" />
                                                <span className="hidden lg:block">
                                                    Delete
                                                </span>
                                            </button>
                                        </td>
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
