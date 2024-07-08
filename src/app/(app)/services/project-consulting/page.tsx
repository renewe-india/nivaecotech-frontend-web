import React from 'react'
import Image from 'next/image'

function ProjectConsulting() {
    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/card/consulting.avif') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
                    <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                        Project Consulting
                    </h1>
                    <p className="fs-5 fw-medium text-center text-white ">
                        Leveraging Rooftop Space for Efficient Electricity
                        Production in Industries and Residential Societies.
                    </p>

                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
                </div>
            </div>
            <div className="container-xxl">
                <div className="container">
                    <section>
                        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                            <div className="max-w-3xl">
                                <h6 className="text-textPrimary text-uppercase">
                                    GET IN TOUCH
                                </h6>
                                <h2 className="text-3xl font-bold sm:text-4xl">
                                    The Significance of Solar Consulting for
                                    Your Solar Farm Investment.
                                </h2>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                                <div className="lg:py-8">
                                    <article className="space-y-4  text-gray-600">
                                        <p>
                                            Embarking on the journey to
                                            establish a solar farm is a
                                            transformative step towards
                                            sustainable energy generation. In
                                            this intricate landscape, the role
                                            of solar consulting emerges as
                                            pivotal for ensuring not only the
                                            success of your project but also the
                                            optimization of your investment. A
                                            solar farm involves multifaceted
                                            considerations, from site selection
                                            and regulatory compliance to
                                            technological choices and long-term
                                            operational strategies. Expert solar
                                            consulting provides you with a
                                            comprehensive roadmap, guiding you
                                            through every decision-making
                                            juncture.
                                        </p>
                                        <p className="text-gray-500 font-bold">
                                            Informed Decision-Making and Risk
                                            Mitigation:
                                        </p>
                                        <p className="text-gray-500 md:mt-4 md:block">
                                            Solar consulting serves as a beacon
                                            of informed decision-making.
                                            Seasoned consultants possess a deep
                                            understanding of solar technologies,
                                            market trends, and regulatory
                                            intricacies. By conducting thorough
                                            site assessments, they can identify
                                            the most suitable location,
                                            accounting for factors like solar
                                            irradiance, shading, and topography.
                                            Furthermore, their insights into
                                            local regulations ensure seamless
                                            permitting and compliance, reducing
                                            the risk of costly delays. With
                                            their guidance, you can confidently
                                            navigate through potential
                                            challenges, safeguarding your
                                            investment and timelines.
                                        </p>
                                        <p className="text-gray-500 font-bold">
                                            Maximizing ROI and Sustainable
                                            Impact:
                                        </p>
                                        <p className="text-gray-500 md:mt-4 md:block">
                                            The ultimate goal of a solar farm
                                            investment extends beyond clean
                                            energy generation—it includes
                                            achieving a healthy return on
                                            investment (ROI) while contributing
                                            to a sustainable future. Solar
                                            consultants bring a strategic
                                            perspective to your project,
                                            optimizing system design, layout,
                                            and technology selection to maximize
                                            energy output and efficiency. Their
                                            expertise helps you strike the right
                                            balance between upfront costs and
                                            long-term gains. Moreover, by
                                            adopting the latest advancements in
                                            solar technology and incorporating
                                            efficient operation and maintenance
                                            strategies, consultants ensure that
                                            your solar farm remains a robust and
                                            reliable asset for years to come,
                                            aligning economic success with
                                            environmental stewardship.
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
                                <div className="relative h-64 overflow-hidden rounded-xl sm:h-80 lg:h-full">
                                    <Image
                                        src="/card/consulting.jpg"
                                        alt=""
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ProjectConsulting
