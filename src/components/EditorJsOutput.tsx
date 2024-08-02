'use client'

import { FC } from 'react'
import {
    HeaderOutput,
    ParagraphOutput,
    TableOutput,
    ImageOutput,
    ListOutput, // Add this import
} from 'editorjs-react-renderer'

const classes = {
    header: {
        h1: 'header-class1 header-class2',
        h2: 'header-class1 header-class2',
        h3: 'header-class1 header-class2',
        h4: 'header-class1 header-class2',
        h5: 'header-class1 header-class2',
        h6: 'header-class1 header-class2',
    },
    paragraph: 'text-lg text-justify',
    list: {
        ol: {
            container:
                'list-decimal list-inside text-lg text-justify font-bold text-gray-900 ml-4',
            listItem: 'list-item-class',
        },
        ul: {
            container:
                'list-disc list-inside text-lg text-justify font-bold text-gray-900 ml-4',
            listItem: 'list-item-class',
        },
    },
}

interface EditorOutputProps {
    content: any
}

const EditorOutput: FC<EditorOutputProps> = ({ content }) => {
    return (
        <section>
            {content.blocks.map((block: any, index: number) => {
                switch (block.type) {
                    case 'header':
                        return (
                            <HeaderOutput
                                key={index}
                                data={block.data}
                                classNames={classes.header}
                            />
                        )
                    case 'paragraph':
                        return (
                            <ParagraphOutput
                                key={index}
                                data={block.data}
                                classNames={classes.paragraph}
                            />
                        )
                    case 'table':
                        return <TableOutput key={index} data={block.data} />
                    case 'image':
                        return <ImageOutput key={index} data={block.data} />
                    case 'list': {
                        const listType =
                            block.data.style === 'ordered' ? 'ol' : 'ul'
                        return (
                            <ListOutput
                                key={index}
                                data={block.data}
                                classNames={classes.list[listType]}
                            />
                        )
                    }
                    default:
                        return null
                }
            })}
        </section>
    )
}

export default EditorOutput
