import React from "react";
import Image from "next/image";

function fundraising() {
  return (
    <>
      <div
        className="container-fluid  mb-5 py-5"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/card/fundraising.jpg') center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
          <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
            Fund Raising
          </h1>
          <p className="fs-5 fw-medium text-center text-white ">
            Elevate your solar ambitions with our specialized fund-raising
            services tailored to propel solar projects towards successful
            implementation.
          </p>

          <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
        </div>
      </div>
      <div className="container-xxl">
        <div className="container">
          <section className="overflow-hidden rounded-xl bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                <h6 className="text-[#FF4917] text-uppercase">GET IN TOUCH</h6>
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Elevating Solar Initiatives through Strategic Funding
                </h2>
                <p className="hidden text-gray-500 md:mt-4 md:block">
                  In the dynamic realm of sustainable energy, securing funding
                  for solar projects has emerged as a pivotal focus for
                  environmentally-conscious investors and advocates of ESG
                  principles. Various regions have adopted fixed tariffs for
                  solar-generated electricity, fostering an encouraging
                  environment for financing renewable energy endeavors. These
                  incentives, coupled with the broader positive trajectory of
                  the renewable sector, point toward promising and consistent
                  returns on investment.
                </p>
                <p className="text-gray-500 font-bold">
                  A Leading Partner in Solar Fundraising:
                </p>
                <p className="text-gray-500 md:mt-4 md:block">
                  Our team stands as a seasoned corporate finance advisor,
                  specializing in solar fundraising and debt arrangement for
                  solar power ventures on a global scale. Recognizing the
                  significance of solar project funding in shaping the energy
                  landscape, we are dedicated to skillfully navigating the
                  complexities of capital allocation to maximize investor
                  returns. Our expertise becomes particularly crucial in
                  optimizing project development by effectively managing capital
                  costs.
                </p>
                <p className="text-gray-500 font-bold">
                  Tailored Approaches to Solar Funding:
                </p>
                <p className="text-gray-500 md:mt-4 md:block">
                  We understand that solar projects often require a strategic
                  interplay of equity and debt. Our tailored funding strategies
                  are designed to align with the distinctive characteristics of
                  each project. By focusing on ventures that are at advanced
                  stages of readiness, we ensure a streamlined process that
                  brings projects closer to realization. Our transparent and
                  efficient approach to fundraising ensures that your solar
                  project receives the financial support it needs to thrive.
                </p>
                <div className="mt-4 md:mt-8">
                  <a
                    className="no-underline text-white bg-[#2e7134] hover:bg-[#193d1c] rounded my-5 py-3 px-5"
                    href="/contact"
                  >
                    Request a callback
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-full">
              <Image
                src="/card/about-1.jpg"
                alt=""
                layout="fill"
                objectFit="cover"
                className="sm:self-end sm:rounded-ss-[30px] md:rounded-ss-[60px]"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default fundraising;
