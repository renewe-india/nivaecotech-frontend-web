import Experience from "@/components/Experience";
import React from "react";
import Image from "next/image";

function SolarParkDevelopment() {
  return (
    <>
      <div
        className="container-fluid  mb-5 py-5"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/solarpark/solarPark-banner.jpg') center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
          <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
            Utility Scale Solar Parks Development
          </h1>
          <p className="fs-5 fw-medium text-center text-white ">
            We are dedicated to crafting vast solar parks that elevate energy
            generation to new height.
          </p>

          <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700"></hr>
        </div>
      </div>
      <div className="container-xxl">
        <div className="container">
          <Experience />
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <h6 className="text-[#FF4917] text-uppercase">GET IN TOUCH</h6>
              <h1 className="mb-4">
                India&apos;s trusted solar park developer
              </h1>
              <p className="mb-4">
                Today&apos;s business landscape is marked by a resounding
                commitment to renewable energy sourcing, with a particular
                emphasis on ambitious global initiatives like RE100. While the
                integration of rooftop and distributed solar solutions offers an
                excellent starting point, many enterprises find themselves
                constrained by limited on-site space, hindering their ability to
                establish comprehensive power plants capable of meeting
                substantial energy demands.
              </p>
              <p className="mb-4">
                Enter grid-connected, or &apos;Open Access,&apos; solar power
                facilitated by offsite Solar Farms — a dynamic solution to this
                challenge. By seamlessly delivering large-scale energy through
                the grid, this approach enables businesses to satisfy up to 100%
                of their energy requirements. This transformative strategy has
                already materialized for notable corporations such as Adobe
                India, who effectively power their Bangalore facility with 100%
                renewable energy sourced from solar farms in Karnataka.
              </p>
              <p className="mb-4">
                For businesses, the adoption of renewable energy strategies
                achieves a dual-fold objective. It not only translates to
                significant cost savings on electricity but also propels strides
                toward the coveted goal of 100% renewable energy sourcing. Open
                access solar power presents an increasingly popular avenue,
                granting enterprises the opportunity to fulfill their entire
                electricity needs at tariffs that undercut prevailing grid
                electricity rates. Furthermore, these agreements ensure price
                stability for the next two to three decades, cementing a secure
                and sustainable energy future.
              </p>
              <p className="mb-4">
                In essence, Solar Park Development, also known as &apos;Open
                Source Utility Scale Solar Farms,&apos; is a beacon of progress
                in the realm of sustainable energy solutions. It offers
                businesses an instrumental means to revolutionize their energy
                sourcing paradigm, transcending space constraints and fostering
                a cost-effective transition toward a greener, more sustainable
                future.
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
            <div className="col-lg-6 pt-4" style={{ minHeight: "500px" }}>
              <div
                className="position-relative h-100 wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <Image
                  className="position-absolute rounded img-fluid w-100 h-100"
                  src="/solarpark/solarPark-banner.jpg"
                  objectFit="cover"
                  fill
                  style={{ objectFit: "cover", padding: "0 0 50px 100px" }}
                  alt=""
                />
                <Image
                  className="position-absolute rounded start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
                  src="/card/about-2.jpg"
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolarParkDevelopment;
