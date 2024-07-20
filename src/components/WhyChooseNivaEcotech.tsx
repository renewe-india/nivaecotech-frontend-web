import { ChooseReasons } from '@/constants/constants'
import { Done, Phone } from '@mui/icons-material'
import React from 'react'
import Image from 'next/image'

const WhyChooseNivaEcotech: React.FC = () => {
    return (
        <div className="container-fluid px-4 mx-0 py-5">
            <div className="">
                <div className="row g-5">
                    <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{
                            visibility: 'visible',
                            animationDelay: '0.1s',
                            animationName: 'fadeInUp',
                        }}>
                        <h6 className="text-textPrimary text-uppercase">
                            Why Choose Niva Ecotech?
                        </h6>
                        <h1 className="mb-4">
                            For financial gains through cost-effective
                            solutions, time-saving convenience, and a
                            future-proof investment in renewable energy.
                        </h1>
                        <p className="mb-4">
                            At Niva Ecotech, we understand that the renewable
                            energy landscape is vast and dynamic. Here&apos;s
                            why we stand out as your ideal partner in harnessing
                            the power of sustainable energy solutions:
                        </p>
                        {ChooseReasons.map((item, index) => (
                            <p key={index}>
                                <Done
                                    fontSize="medium"
                                    className="text-success me-3"
                                />

                                <span className="fw-medium text-textPrimary me-3">
                                    {item.title}
                                </span>
                                {item.description}
                            </p>
                        ))}
                        <div className="bg-theme1-light rounded-xl d-flex align-items-center p-4 mt-5">
                            <div
                                className="d-flex flex-shrink-0 rounded-xl align-items-center justify-content-center bg-white"
                                style={{ width: '60px', height: '60px' }}>
                                <Phone
                                    fontSize="large"
                                    className="text-primary "
                                />
                            </div>
                            <div className=" mx-3">
                                <p className="text-xl lg:text-3xl mb-2 text-[#000000]">
                                    Let&apos;s power a brighter future together.
                                </p>
                                <h3 className="m-0 text-xl lg:text-3xl text-white">
                                    +91 989 099 3201
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col pt-4" style={{ minHeight: '500px' }}>
                        <div
                            className="position-relative h-100 wow fadeInUp"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: 'visible',
                                animationDelay: '0.5s',
                                animationName: 'fadeInUp',
                            }}>
                            <Image
                                className="position-absolute rounded-2xl img-fluid w-100 h-100"
                                src="/card/about-1.jpg"
                                fill
                                style={{ objectFit: 'cover' }}
                                alt=""
                            />
                            <Image
                                className="position-absolute rounded-2xl start-0 bottom-0 img-fluid bg-white pt-2 pe-2 pb-2 w-50 h-50"
                                src="/card/about-2.jpg"
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes=""
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseNivaEcotech
