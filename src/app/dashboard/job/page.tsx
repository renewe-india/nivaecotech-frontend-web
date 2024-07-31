import Image from 'next/image'
import React from 'react'

const page: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <span className="text-black font-semibold">
                We are working on this part!
            </span>
            <Image
                src="/undraw_under_construction_-46-pa.svg"
                alt="under_construction"
                width={900}
                height={300}
                priority
                unoptimized
            />
        </div>
    )
}

export default page
