import { ReactNode, Suspense } from 'react'
import Footer from '@/components/Footer'
import { Navigation } from '@/components/Navbar'
import Loading from '@/components/Loading'

const BlogLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation />
            <main className="top-20 mt-20 pt-12">
                <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Footer />
        </>
    )
}

export default BlogLayout
