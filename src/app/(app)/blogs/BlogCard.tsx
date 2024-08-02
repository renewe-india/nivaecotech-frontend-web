import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Block {
    id: string
    type: string
    data: {
        text: string
    }
}

interface Content {
    time: number
    blocks: Block[]
    version: string
}

interface BlogProps {
    blog: {
        id: number
        slug: string
        title: string
        published_at: string
        is_author: boolean
        content: string
        permissions: {
            view: boolean
            update: boolean
            delete: boolean
        }
        author: {
            name: string
            username: string
            email: string
            role: string
            designation: string
            department: string
        }
    }
    imageUrl?: string | null
}

const BlogCard: React.FC<BlogProps> = ({ blog, imageUrl }) => {
    const formattedDate = new Date(blog.published_at).toLocaleString(
        'default',
        {
            month: 'short',
            day: 'numeric',
        },
    )
    const extractLongSentences = (
        content: string,
        minLength: number = 100,
    ): string => {
        const jsonObject: Content = JSON.parse(content)
        const longSentences: string[] = []

        jsonObject.blocks.forEach(block => {
            if (block.type === 'paragraph') {
                const sentences = block.data.text.split('. ')
                sentences.forEach(sentence => {
                    if (sentence.length >= minLength) {
                        longSentences.push(sentence)
                    }
                })
            }
        })

        // If no long sentences were found, return the first block's text
        if (longSentences.length === 0 && jsonObject.blocks.length > 0) {
            return jsonObject.blocks[0].data.text
        }

        return longSentences.join('. ')
    }

    return (
        <article className="flex rounded-3xl bg-white shadow-md transition hover:shadow-xl">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime={blog.published_at}
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                    <span>{new Date(blog.published_at).getFullYear()}</span>
                    <span className="w-px flex-1 bg-gray-900/10" />
                    <span>{formattedDate}</span>
                </time>
            </div>

            <div className="hidden sm:block sm:basis-56">
                <Image
                    alt={blog.title}
                    src={
                        imageUrl ? imageUrl : '/blogs/turnkey-epc-services.jpg'
                    }
                    width={800}
                    height={800}
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <h3 className="font-bold uppercase text-gray-900">
                        {blog.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                        <span className="font-semibold">
                            {blog.author.name}
                        </span>{' '}
                        - {formattedDate}
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                        {extractLongSentences(blog.content)}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                    <Link
                        href={`/blogs/${blog.slug}`}
                        className="no-underline rounded-xl block bg-textSecondary hover:bg-theme2-light mb-2 mr-2 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition">
                        Read Blog
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default BlogCard
