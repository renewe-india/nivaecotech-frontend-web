import { StickyScrollRevealDemo } from '@/components/Carousel'
import ConsultationSection from '@/components/ConsultationSection'
import Experience from '@/components/Experience'
import FactsSection from '@/components/FactsSection'
import DynamicCards from '@/components/Hovercard'
import { Navigation } from '@/components/Navbar'
import WhyChooseNivaEcotech from '@/components/WhyChooseNivaEcotech'
import InfiniteMovingCardsTechnicians from '@/components/Technicians'
import Testimonials from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main>
            <Navigation />
            <StickyScrollRevealDemo />
            <DynamicCards />
            <WhyChooseNivaEcotech />
            <FactsSection />
            <Experience />
            <InfiniteMovingCardsTechnicians />
            <Testimonials />
            <ConsultationSection />
            <Footer />
        </main>
    )
}
