import React from 'react'

const BlogDate = ({ timestamp }: { timestamp: number }) => {
    const date = new Date(timestamp)

    return (
        <div className="text-xl">
            <time
                dateTime={date.toISOString()}
                className="flex items-center gap-2 px-10 uppercase text-gray-900">
                <span>
                    {date.toLocaleString('default', {
                        month: 'long',
                        day: 'numeric',
                    })}
                    {','}
                </span>
                <span>{date.getFullYear()}</span>
            </time>
        </div>
    )
}
export default BlogDate
