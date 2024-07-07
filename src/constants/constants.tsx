import Image from "next/image";

export const HovercardItems = [
  {
    src: "/card/solarpark.jpg",
    alt: "",
    title: "Utility Scale Solar Parks",
    description:
      "Utility-scale solar parks are large-scale solar energy installations that generate electricity from sunlight and contribute significantly to renewable energy production.",
  },
  {
    src: "/card/Maintenance.jpg",
    alt: "",
    title: "Operations and Maintenance",
    description:
      "Solar Operations and Maintenance involves regular monitoring, upkeep, and repair of solar installations to ensure optimal performance, longevity, and energy output.",
  },
  {
    src: "/card/solarroof.jpg",
    alt: "",
    title: "Rooftop Solar EPC",
    description:
      "Rooftop Solar EPC involves the design, engineering, procurement, and construction of rooftop solar installations for commercial and residential buildings.",
  },
];

export const ChooseReasons = [
  {
    title: "Expertise that Matters:",
    description:
      "Our experienced team brings a wealth of knowledge to the table, ensuring that your renewable energy project is in capable hands from conception to completion.",
  },
  {
    title: "Comprehensive Solution:",
    description:
      "From project planning and documentation to on-grid tie-ups and ongoing maintenance, we offer a full-suite service that covers every facet of solar energy development.",
  },
  {
    title: "Proven Track Record:",
    description:
      "With a portfolio of successful projects, Niva Ecotech has a track record that speaks to our commitment to delivering excellence and exceeding expectations.",
  },
  {
    title: "Client-Centric Approach:",
    description:
      "Your needs are at the heart of everything we do. We tailor our services to meet your unique requirements, ensuring that you receive a solution that truly fits.",
  },
  {
    title: "Turnkey Convenience:",
    description:
      "Leave the complexities to us. Our turnkey solutions free you from the technicalities, allowing you to focus on what you do best while we handle the rest.",
  },
  {
    title: "Transparent Communication:",
    description:
      "We believe in open and honest communication. Throughout the project, we keep you informed, enabling you to make well-informed decisions.",
  },
];

const xyx = [
  {
    title: "Solar Operations and Maintenance",
    description:
      "Solar Operations and Maintenance involves regular monitoring, upkeep, and repair of solar installations to ensure optimal performance, longevity, and energy output.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/card/Maintenance1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "Fundraising",
    description:
      "Fundraising for solar projects involves seeking financial support from investors, organizations, and communities to fund the development and implementation of solar energy initiatives.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/card/fundraising.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "Project Consulting",
    description:
      "Solar project consulting offers specialized expertise in planning, designing, and managing solar initiatives, ensuring effective implementation and optimal performance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/card/consulting.avif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "Utility-Scale Solar parks",
    description:
      "Utility-scale solar parks are large-scale solar energy installations that generate electricity from sunlight and contribute significantly to renewable energy production.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/rooftop/Rooftop.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
  {
    title: "On-grid Rooftop Solar",
    description:
      "On-grid rooftop solar systems utilize building rooftops to generate clean energy, connected to the grid, fostering sustainability, savings, and environmental contribution.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/solarpark/Solarpark.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
          unoptimized
        />
      </div>
    ),
  },
];
