'use client'
import React, { useState, useEffect } from 'react'
import { ArrowBackIos, ArrowForwardIos, Circle } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

const slides = [
    {
        url: '/card/Maintenance1.jpg',
        title: 'Solar Operations and Maintenance',
        description:
            'Solar Operations and Maintenance involves regular monitoring, upkeep, and repair of solar installations to ensure optimal performance, longevity, and energy output.',
    },
    {
        url: '/card/fundraising.jpg',
        title: 'Fundraising',
        description:
            'Fundraising for solar projects involves seeking financial support from investors, organizations, and communities to fund the development and implementation of solar energy initiatives.',
    },
    {
        url: '/card/solarpark.jpg',
        title: 'Project Consulting',
        description:
            'Solar project consulting offers specialized expertise in planning, designing, and managing solar initiatives, ensuring effective implementation and optimal performance.',
    },
    {
        url: '/solarpark/solarPark-banner.jpg',
        title: 'Utility-Scale Solar parks',
        description:
            'Utility-scale solar parks are large-scale solar energy installations that generate electricity from sunlight and contribute significantly to renewable energy production.',
    },
    {
        url: '/rooftop/Rooftop.jpg',
        title: 'On-grid Rooftop Solar',
        description:
            'On-grid rooftop solar systems utilize building rooftops to generate clean energy, connected to the grid, fostering sustainability, savings, and environmental contribution.',
    },
]

export function StickyScrollRevealDemo() {
    const router = useRouter()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [loadedImages, setLoadedImages] = useState<string[]>([])

    useEffect(() => {
        preloadImages()
    }, [])

    const preloadImages = () => {
        const imageLoadPromises = slides.map(
            slide =>
                new Promise<void>(resolve => {
                    const img = new Image()
                    img.src = slide.url
                    img.onload = () => {
                        setLoadedImages(prev => [...prev, slide.url])
                        resolve()
                    }
                }),
        )

        Promise.all(imageLoadPromises).then(() => {
            setLoading(false)
        })
    }

    const prevSlide = () => {
        const newIndex =
            currentIndex === 0 ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const newIndex =
            currentIndex === slides.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    const backgroundStyle: React.CSSProperties = loadedImages.includes(
        slides[currentIndex].url,
    )
        ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${slides[currentIndex].url})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              transition: 'background-image 0.5s ease-in-out',
          }
        : {}
    const gotoAbout = () => {
        router.push('/about-us')
    }
    const gotoContact = () => {
        router.push('/contact')
    }
    return (
        <div className="top-20 h-[780px] w-full m-auto py-12 px-4 relative group">
            <div
                style={backgroundStyle}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                {/* Overlay content */}
                <div className="absolute top-1/2 px-2 lg:left-16 lg:right-16 transform -translate-y-1/2 text-white">
                    {loading ? ( // Conditional rendering based on loading state
                        <div className="text-5xl mb-2 font-bold">
                            Loading...
                        </div>
                    ) : (
                        <>
                            <div className="text-5xl mb-2 font-bold pr-5">
                                {slides[currentIndex].title}
                            </div>
                            <hr className="w-full h-3 mx-auto bg-white pr-5 border-0 rounded dark:bg-gray-700"></hr>
                            <p className="text-sm lg:text-lg lg:font-extrabold lg:pr-80 pr-5">
                                {slides[currentIndex].description}
                            </p>
                            <div className="flex gap-4 mt-4">
                                <button
                                    className="bg-theme1-light hover:bg-theme1-dark rounded-xl text-white uppercase px-4 py-3 my-2 lg:my-10"
                                    onClick={gotoAbout}>
                                    Read More
                                </button>
                                <button
                                    className="bg-theme2-light hover:bg-theme2-dark rounded-xl text-white uppercase px-4 py-3 my-2 lg:my-10"
                                    onClick={gotoContact}>
                                    Consult
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ArrowBackIos onClick={prevSlide} fontSize="medium" />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ArrowForwardIos onClick={nextSlide} fontSize="medium" />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer">
                        <Circle />
                    </div>
                ))}
            </div>
        </div>
    )
}
