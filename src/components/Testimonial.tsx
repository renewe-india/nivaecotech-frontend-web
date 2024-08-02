'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import axios from '@/lib/axios'
import Image from './Image'

interface Client {
    slug: string
    name: string
    website: string | null
    phone: string | null
    email: string | null
    description: string | null
    logo: {
        url: string
        srcset: string
    }
    created_at: string
    updated_at: string
}

interface Meta {
    current_page: number
    from: number
    last_page: number
    links: { url: string | null; label: string; active: boolean | null }[]
    path: string
    per_page: number
    to: number
    total: number
}

const Testimonials: React.FC = () => {
    const [clients, setClients] = useState<Client[][]>([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [meta, setMeta] = useState<Meta | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchData(currentPage)
    }, [currentPage])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % clients.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [clients])

    useEffect(() => {
        setCurrentSlide(0)
    }, [clients])

    const fetchData = async (page: number) => {
        try {
            const response = await axios.get(
                `api/tenant/portfolio/clients?page=${page}&limit=6`,
            )
            const chunkSize = 6
            const clientChunks = []
            for (let i = 0; i < response.data.data.length; i += chunkSize) {
                clientChunks.push(response.data.data.slice(i, i + chunkSize))
            }
            setClients(clientChunks)
            setMeta(response.data.meta)
        } catch (error) {
            // console.error('Error fetching data:', error)
        }
    }

    const handleNextPage = () => {
        if (meta && currentPage < meta.last_page) {
            setCurrentPage(prevPage => prevPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (meta && currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1)
        }
    }

    const variants = {
        enter: {
            x: 300,
            opacity: 0,
            position: 'absolute' as const,
        },
        center: {
            x: 0,
            opacity: 1,
            position: 'relative' as const,
        },
        exit: {
            x: -300,
            opacity: 0,
            position: 'absolute' as const,
        },
    }

    return (
        <section className="bg-gray-50">
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
                <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
                    <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Our Esteemed Clients
                    </h2>

                    <div className="mt-8 flex gap-4 lg:mt-0 justify-center lg:justify-between">
                        <button
                            aria-label="Previous page"
                            className="rounded-full border border-rose-600 p-3 text-theme1-light transition hover:bg-theme1-dark hover:text-white"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}>
                            <ArrowBackIos fontSize="medium" />
                        </button>
                        <div className="flex items-center">
                            <span className="text-lg text-gray-900">
                                Page {currentPage} of{' '}
                                {meta ? meta.last_page : 'N/A'}
                            </span>
                        </div>
                        <button
                            aria-label="Next page"
                            className="rounded-full border border-rose-600 p-3 text-theme1-light transition hover:bg-theme1-dark hover:text-white"
                            onClick={handleNextPage}
                            disabled={
                                meta ? currentPage === meta.last_page : false
                            }>
                            <ArrowForwardIos fontSize="medium" />
                        </button>
                    </div>
                </div>

                <div className="mt-10 relative overflow-hidden">
                    <AnimatePresence initial={false} custom={currentSlide}>
                        <motion.div
                            key={currentSlide}
                            className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
                            custom={currentSlide}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5 }}>
                            {clients.length > 0 ? (
                                clients[currentSlide].map(client => (
                                    <div
                                        key={client.slug}
                                        className={`relative rounded-lg shadow-md bg-white overflow-hidden`}>
                                        <div className="p-6">
                                            <div className="flex items-center">
                                                <Image
                                                    className="rounded-full w-16 h-16"
                                                    data={client.logo}
                                                    alt={client.name}
                                                    width={64}
                                                    height={64}
                                                />
                                                <div className="ml-4">
                                                    <h3 className="text-xl font-bold text-gray-900">
                                                        {client.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No clients found.</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
