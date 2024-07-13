import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <>
            <div
                className="container-fluid  mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/display-flex.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                    <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                        About Us
                    </h1>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-md-6 animate-fade-in-up"
                            style={{
                                animationDelay: '0.1s',
                                visibility: 'visible',
                            }}>
                            <h6 className="text-[#ffa247] text-uppercase">
                                Get In Touch
                            </h6>
                            <h3 className="font-bold">
                                NIVA ECOTECH PVT. LTD.
                            </h3>
                            <div className="mb-2 d-flex align-items-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Tellus pellentesque eu tincidunt tortor aliquam
                                nulla. In dictum non consectetur a. Sed viverra
                                ipsum nunc aliquet bibendum enim facilisis
                                gravida. Ultrices tincidunt arcu non sodales
                                neque. Eu sem integer vitae justo eget magna
                                fermentum iaculis. Scelerisque felis imperdiet
                                proin fermentum leo. Risus sed vulputate odio ut
                                enim blandit volutpat. In hendrerit gravida
                                rutrum quisque non tellus orci ac auctor. Urna
                                nec tincidunt praesent semper feugiat nibh sed.
                                Faucibus interdum posuere lorem ipsum. Et
                                molestie ac feugiat sed lectus. Aliquam nulla
                                facilisi cras fermentum odio eu. Vitae sapien
                                pellentesque habitant morbi tristique senectus.
                                Aliquam nulla facilisi cras fermentum odio eu.
                                Integer malesuada nunc vel risus commodo
                                viverra.
                            </div>
                        </div>
                        <div
                            className="col-md-6 animate-fade-in-up"
                            style={{
                                animationDelay: '0.1s',
                                visibility: 'visible',
                            }}>
                            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                                <Image
                                    src="/card/maintenance2.jpg"
                                    alt=""
                                    fill
                                    className="rounded-xl"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
