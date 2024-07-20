import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    data?: {
        url?: string
        srcset?: string
    }
    src?: string
    alt?: string
    customClass?: string
}

const Image: React.FC<ImageProps> = ({
    data,
    src,
    alt,
    customClass,
    ...props
}) => {
    return (
        <img
            src={src || (data && data.url) || ''}
            srcSet={src ? '' : (data && data.srcset) || ''}
            className={customClass || ''}
            alt={alt || ''}
            {...props}
        />
    )
}

export default Image
