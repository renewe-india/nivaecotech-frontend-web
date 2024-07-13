import Link from 'next/link'
import React from 'react'

function Experience() {
    return (
        <section>
            <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 ">
                    <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            9+ Years Experience
                        </h2>

                        <p className="mt-4 text-gray-600">
                            Niva Ecotech is your ideal partner for renewable
                            energy solutions. Our expertise, comprehensive
                            services, proven track record, client-centric
                            approach, turnkey convenience, and transparent
                            communication set us apart.
                        </p>

                        <Link
                            href="/projects"
                            className="mt-8 no-underline inline-block rounded bg-theme1-light px-12 py-3 text-sm font-medium text-white transition hover:bg-theme1-dark focus:outline-none focus:ring focus:ring-yellow-400">
                            Explore Our Projects
                        </Link>
                    </div>

                    {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="block no-underline rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <SolarPower fontSize="large" className="w-6 h-6" />
              </span>

              <div className="mt-2 text-xl font-bold">Sanstar Limited</div>

              <p className="mb-0 sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                <ElectricBolt fontSize="medium" />
                3.5 MWp
              </p>
              <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                <Place fontSize="medium" />
                Shirpur, MH, IND
              </p>
              <Link href="#">
                <button className="inline-flex items-center gap-2 rounded-md bg-[#bf7034]  hover:bg-[#8c5226] text-white px-4 py-2 text-sm shadow-sm focus:relative">
                  <ReadMore fontSize="medium" />
                  Read More
                </button>
              </Link>
            </div>

            <div className="block no-underline rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <SolarPower fontSize="large" className="w-6 h-6" />
              </span>

              <div className="mt-2 text-xl font-bold">Sanstar Limited</div>

              <p className="mb-0 sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                <ElectricBolt fontSize="medium" />
                3.5 MWp
              </p>
              <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                <Place fontSize="medium" />
                Shirpur, MH, IND
              </p>
              <Link href="#">
                <button className="inline-flex items-center gap-2 rounded-md bg-[#bf7034] hover:bg-[#8c5226] px-4 py-2 text-sm text-white shadow-sm focus:relative">
                  <ReadMore fontSize="medium" />
                  Read More
                </button>
              </Link>
            </div>

            <div className="block no-underline rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <SolarPower fontSize="large" className="w-6 h-6" />
              </span>

              <div className="mt-2 text-xl font-bold">Sanstar Limited</div>

              <p className="mb-0 sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                <ElectricBolt fontSize="medium" />
                3.5 MWp
              </p>
              <p className=" sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                <Place fontSize="medium" />
                Shirpur, MH, IND
              </p>
              <Link href="#">
                <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-white text-sm bg-[#bf7034] hover:bg-[#8c5226] shadow-sm focus:relative">
                  <ReadMore fontSize="medium" />
                  Read More
                </button>
              </Link>
            </div>
          </div> */}
                </div>
            </div>
        </section>
    )
}

export default Experience
