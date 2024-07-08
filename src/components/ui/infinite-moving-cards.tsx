'use client'

import { cn } from '@/lib/utils'
import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        name: string
        role: string
        designation: string
    }[]
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
    }, [])
    const [start, setStart] = useState(false)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'left') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards',
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse',
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '10s',
                )
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s',
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s',
                )
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]',
                className,
            )}>
            <ul
                ref={scrollerRef}
                className={cn(
                    ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                )}>
                {items.map((item, idx) => (
                    <li
                        className="w-[250px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[300px]"
                        style={{
                            background:
                                'linear-gradient(180deg, #193d1c, #73431f',
                        }}
                        key={item.name}>
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                            <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                <Image
                                    src="/placeholder.jpg"
                                    width={250}
                                    height={250}
                                    alt=""
                                />
                            </span>
                            <div className="relative z-20 mt-6">
                                <div className="flex flex-col justify-between">
                                    <div className="flex flex-row justify-between">
                                        <div className=" text-xl leading-[1.6] text-textSecondary font-bold">
                                            {item.name}
                                        </div>
                                        <div className="flex gap-2">
                                            <Link
                                                href="#"
                                                className="text-white">
                                                <Facebook
                                                    fontSize="medium"
                                                    className="bg-primary"
                                                />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="text-blue">
                                                <Twitter
                                                    fontSize="medium"
                                                    className="bg-white"
                                                />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="text-white">
                                                <LinkedIn
                                                    fontSize="medium"
                                                    className="bg-primary"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className=" text-l leading-[1.6] text-gray-400 font-normal">
                                        {item.designation}
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    )
}
