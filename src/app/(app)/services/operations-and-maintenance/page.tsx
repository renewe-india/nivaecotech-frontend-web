import React from 'react'
import Experience from '@/components/Experience'
import Image from 'next/image'

function Maintenance() {
    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/solarpark/solarPark-banner.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
                    <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                        Operations and maintenance
                    </h1>
                    <p className="fs-5 fw-medium text-center text-white ">
                        Optimizing Longevity and Performance through Project
                        Operations and Maintenance
                    </p>

                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
                </div>
            </div>
            <div className="container-xxl">
                <div className="container">
                    <Experience />
                    <section>
                        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                            <div className="max-w-3xl">
                                <h6 className="text-textPrimary text-uppercase">
                                    GET IN TOUCH
                                </h6>
                                <h2 className="text-3xl font-bold sm:text-4xl">
                                    India&apos;s trusted Solar Maintenance
                                    Service Provider
                                </h2>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                    <Image
                                        src="/card/maintenance2.jpg"
                                        alt=""
                                        fill
                                        className="rounded-xl"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>

                                <div className="lg:py-16">
                                    <article className="space-y-4  text-gray-600">
                                        <p>
                                            In the realm of solar energy, the
                                            journey doesn&apos;t end with the
                                            installation of panels and
                                            infrastructure. Instead, it marks
                                            the beginning of a crucial phase:
                                            solar project Operations and
                                            Maintenance (O&M). As the sun&apos;s
                                            rays power your investment, a robust
                                            O&M strategy becomes paramount to
                                            ensure long-term efficiency and
                                            returns.
                                        </p>

                                        <p>
                                            Efficient O&M is the linchpin of
                                            solar project sustainability. It
                                            encompasses a comprehensive range of
                                            tasks, from regular inspections and
                                            cleaning to performance analysis and
                                            troubleshooting. Beyond preventing
                                            potential issues, diligent O&M
                                            enhances energy output, safeguards
                                            equipment longevity, and maximizes
                                            your return on investment.
                                        </p>
                                        <p>
                                            Partnering with seasoned
                                            professionals for O&M offers several
                                            advantages. Experienced teams
                                            possess an acute understanding of
                                            solar technologies and are equipped
                                            to swiftly address any technical or
                                            operational challenges. By
                                            conducting routine check-ups and
                                            promptly responding to anomalies,
                                            they guarantee that your solar
                                            project operates at peak capacity.
                                        </p>

                                        <p>
                                            A proactive O&M approach guarantees
                                            a solar project&apos;s longevity and
                                            profitability. Regular assessments,
                                            fine-tuning, and swift intervention
                                            ensure consistent energy generation,
                                            enabling your project to stand as a
                                            beacon of sustainable energy for
                                            years to come.
                                        </p>
                                    </article>
                                    <div className="mt-10">
                                        <a
                                            className="no-underline text-white bg-theme1-light hover:bg-theme1-dark rounded my-5 py-3 px-5"
                                            href="/contact">
                                            Request a callback
                                        </a>
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

export default Maintenance
