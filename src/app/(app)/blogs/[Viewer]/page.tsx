import dynamic from 'next/dynamic'

const ViewerInstance = dynamic(() => import('./Viewer'), {
    ssr: false,
})

function page() {
    return (
        <div className="px-4">
            <ViewerInstance />
        </div>
    )
}

export default page
