import React from "react";
import Image from "next/image";
import Experience from "@/components/Experience";

function RooftopSolarEPC() {
  return (
    <>
      <div
        className="container-fluid  mb-5 py-5"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/rooftop/Rooftop.jpg') center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
          <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
            Rooftop Solar Solutions
          </h1>
          <p className="fs-5 fw-medium text-center text-white ">
            Leveraging Rooftop Space for Efficient Electricity Production in
            Industries and Residential Societies.
          </p>

          <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
        </div>
      </div>
      <div className="container-xxl lg:mb-80">
        <div className="container">
          <Experience />
          <section>
            <div className="mx-auto mb-20 max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                  <div className="relative h-64 sm:h-80 lg:h-full">
                    <Image
                      src="/rooftop/solarRooftop.jpg"
                      alt=""
                      fill
                      className="rounded-xl"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="relative rounded-xl lg:rounded-l-none flex items-center bg-gray-100">
                  <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                  <div className="p-8 sm:p-16 lg:p-24">
                    <h6 className="text-[#FF4917] text-uppercase">
                      GET IN TOUCH
                    </h6>
                    <h1 className="mb-4">
                      India&apos;s trusted rooftop solar developer
                    </h1>
                    <p className="mb-4">
                      Niva Ecotech stands as a trailblazing force, having
                      orchestrated the seamless installation of more than 300 MW
                      of transformative rooftop solar projects for some of
                      India&apos;s most esteemed enterprises and prominent
                      educational institutions. Our commitment is rooted in a
                      simple yet profound concept: the conversion of idle
                      rooftop space into a dynamic source of electricity
                      generation and revenue accumulation.
                    </p>
                    <p className="mb-4">
                      Across diverse industries, the potential for untapped
                      rooftop space is striking. It is within this overlooked
                      expanse that Niva Ecotech sees the canvas for innovation
                      and sustainability. By seamlessly integrating solar power
                      infrastructure, we offer a tangible solution for
                      businesses and residential societies to unlock the latent
                      value of their rooftops. This metamorphosis not only
                      empowers them to become active participants in the clean
                      energy transition but also presents a substantial
                      financial advantage.
                    </p>
                    <p className="mb-4">
                      The advantages are multifaceted. As solar power plants
                      find their place atop these previously underutilized
                      surfaces, businesses can experience a remarkable reduction
                      in energy expenditures, often ranging from 30% to 60%.
                      Beyond mere cost savings, this renewable energy initiative
                      contributes to environmental stewardship, enhancing
                      corporate social responsibility profiles. Niva Ecotech
                      envisions a future where rooftops cease to be dormant
                      spaces, but rather vibrant contributors to sustainable
                      growth, seamlessly intertwining economic prudence with
                      ecological mindfulness.
                    </p>

                    <div className="mt-10">
                      <a
                        className="no-underline text-white bg-[#2e7134] hover:bg-[#193d1c] rounded my-5 py-3 px-5"
                        href="/contact"
                      >
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
  );
}

export default RooftopSolarEPC;
