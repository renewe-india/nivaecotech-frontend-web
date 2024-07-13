import { ReactNode } from 'react'
import Footer from '@/components/Footer'
import { Navigation } from '@/components/Navbar'

const PortfolioLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navigation />
            <main className="top-20 mt-20 pt-10">{children}</main>
            <Footer />
        </>
    )
}

export default PortfolioLayout
