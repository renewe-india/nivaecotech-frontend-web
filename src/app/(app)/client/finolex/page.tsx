'use client'
import React from 'react'
import Image from 'next/image'
import { Bolt, Place } from '@mui/icons-material'

const Client = () => {
    // const clientData = solarParkCardData.find((data) => data.slug === slug);
    const clientData = {
        imageSrc: '/card/solarpark.jpg',
        logo: '/sanstar_logo.jpeg',
        slug: 'sanstar-limited',
        Product: 'Sanstar Limited',
        Location: 'Sirpur, MH, IND',
        capacity: 3.5,
    }
    if (!clientData) {
        return (
            <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                Client not found
            </h1>
        )
    }
    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/sanstar_cover.jpeg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                    <div className="flex flex-row align-items-center  gap-10">
                        <Image
                            src="/sanstar_logo.jpeg"
                            alt="logo"
                            width={100}
                            height={10}
                            className="rounded-3xl"
                        />
                        <h1 className="display-3 text-white  animated slideInDown">
                            {clientData.Product}
                        </h1>
                    </div>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <section>
                        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                                <div className="grid  rounded bg-yellow-50 p-6 sm:p-8">
                                    <div className="mx-auto max-w-md text-center lg:text-left">
                                        <header>
                                            <h2 className="text-xl text-left font-bold text-gray-900 sm:text-3xl">
                                                {clientData.Product}
                                            </h2>
                                            <p className="mt-4 text-left text-gray-500">
                                                Sanstar is a group of two
                                                manufacturing sites spread
                                                across India.
                                            </p>
                                            <p className="mt-4 text-left text-gray-500">
                                                They inaugurated the first
                                                facility in 2005, which has a
                                                production capacity of 350
                                                metric tons in Kutch, Gujarat.
                                                Later in 2016, the second
                                                manufacturing facility, with a
                                                production capacity of 750
                                                metric tons, was established in
                                                Shirpur, Maharashtra. Therefore,
                                                all two facilities have a total
                                                production capacity of 1100
                                                metric tons.
                                            </p>
                                            <p className="mt-4 text-left text-gray-500">
                                                Sanstar has grown from a
                                                small-scale operation to a major
                                                player in the Indian
                                                manufacturing industry over the
                                                past two decades. The group has
                                                consistently invested in
                                                expanding its production
                                                capacity and infrastructure,
                                                making it well-positioned to
                                                meet the needs of customers.
                                                Sanstar thus sets an example of
                                                how firm determination and
                                                dedication can lead to success.
                                            </p>
                                        </header>
                                        <div className="mt-6 flex items-center gap-8 text-xs">
                                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                                <Place fontSize="small" />
                                                <div className="mt-1.5 sm:mt-0">
                                                    <p className="mb-0 font-medium">
                                                        {clientData.Location}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                                <Bolt fontSize="medium" />

                                                <div className="mt-1.5 sm:mt-0">
                                                    <p className="mb-0 text-gray-500">
                                                        Capacity
                                                    </p>
                                                    <p className="mb-0 font-medium">
                                                        {clientData.capacity}{' '}
                                                        MWp
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 lg:py-8">
                                    <div className="max-w-3xl">
                                        <h6 className="text-[#FF4917] text-uppercase">
                                            {clientData.Product}
                                        </h6>
                                        <h2 className="text-3xl font-bold sm:text-4xl">
                                            Interview
                                        </h2>
                                    </div>
                                    <div className="lg:py-8">
                                        <article className="space-y-4  text-gray-600">
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ultrices neque ornare aenean
                                                euismod elementum nisi quis
                                                eleifend. Pharetra diam sit amet
                                                nisl suscipit. Vulputate ut
                                                pharetra sit amet aliquam id
                                                diam maecenas. Amet purus
                                                gravida quis blandit turpis
                                                cursus in hac. Quis vel eros
                                                donec ac odio. Iaculis nunc sed
                                                augue lacus viverra. Diam sit
                                                amet nisl suscipit adipiscing.
                                                Vitae et leo duis ut diam quam
                                                nulla. Semper feugiat nibh sed
                                                pulvinar proin gravida hendrerit
                                                lectus. Elementum tempus egestas
                                                sed sed. Dis parturient montes
                                                nascetur ridiculus mus mauris
                                                vitae ultricies leo. Scelerisque
                                                eu ultrices vitae auctor.
                                                Viverra justo nec ultrices dui
                                                sapien eget mi proin sed. Enim
                                                tortor at auctor urna nunc id
                                                cursus metus. Integer vitae
                                                justo eget magna fermentum
                                                iaculis eu non diam. Diam
                                                phasellus vestibulum lorem sed
                                                risus.
                                            </p>
                                            <p className="text-gray-500 font-bold">
                                                Lorem ipsum dolor sit amet:
                                            </p>
                                            <p className="text-gray-500 md:mt-4 md:block">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Facilisis sed odio morbi quis
                                                commodo odio. Egestas egestas
                                                fringilla phasellus faucibus. At
                                                urna condimentum mattis
                                                pellentesque id nibh tortor id.
                                                Nibh venenatis cras sed felis
                                                eget velit aliquet. Sit amet
                                                consectetur adipiscing elit
                                                pellentesque. Tristique risus
                                                nec feugiat in. Sapien eget mi
                                                proin sed libero enim sed.
                                                Auctor elit sed vulputate mi.
                                                Molestie ac feugiat sed lectus
                                                vestibulum mattis ullamcorper.
                                                Mi eget mauris pharetra et
                                                ultrices neque ornare aenean.
                                            </p>
                                            <p className="text-gray-500 font-bold">
                                                Lorem ipsum dolor sit amet:
                                            </p>
                                            <p className="text-gray-500 md:mt-4 md:block">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Facilisis sed odio morbi quis
                                                commodo odio. Egestas egestas
                                                fringilla phasellus faucibus. At
                                                urna condimentum mattis
                                                pellentesque id nibh tortor id.
                                                Nibh venenatis cras sed felis
                                                eget velit aliquet. Sit amet
                                                consectetur adipiscing elit
                                                pellentesque. Tristique risus
                                                nec feugiat in. Sapien eget mi
                                                proin sed libero enim sed.
                                                Auctor elit sed vulputate mi.
                                                Molestie ac feugiat sed lectus
                                                vestibulum mattis ullamcorper.
                                                Mi eget mauris pharetra et
                                                ultrices neque ornare aenean.
                                            </p>
                                        </article>
                                        <div className="mt-10">
                                            <a
                                                className="no-underline text-white bg-[#2e7134] hover:bg-[#193d1c] rounded my-5 py-3 px-5"
                                                href="/contact">
                                                Request a callback
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Client
