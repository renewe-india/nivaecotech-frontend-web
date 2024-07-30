import Card from '@/components/ui/card'

import Pagination from '@/components/Pagination'
import axios from '@/lib/axios'

interface Project {
    name: string
    phase: string
    slug: string
    type: string
    capacity: string
    description: string | null
    address: string
    date_of_commission: string | null
    client: {
        name: string
        slug: string
        website: string | null
        phone: string | null
        email: string | null
        description: string | null
        logo?: {
            url?: string
            srcset?: string
        }
    }
}

const fetchProjects = async (
    page: number,
): Promise<{ projects: Project[]; totalPages: number }> => {
    try {
        const response = await axios.get(
            `api/portfolio/projects/types/rooftop?page=${page}`,
        )
        return {
            projects: response.data.data,
            totalPages: response.data.meta.last_page,
        }
    } catch (error) {
        return { projects: [], totalPages: 1 }
    }
}

const Rooftop = async ({
    searchParams,
}: {
    searchParams: { page?: string }
}) => {
    const currentPage = parseInt(searchParams.page || '1', 15)
    const { projects, totalPages } = await fetchProjects(currentPage)

    return (
        <>
            <div
                className="container-fluid mb-5 py-5"
                style={{
                    background:
                        "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url('/display-flex.jpg') center center no-repeat",
                    backgroundSize: 'cover',
                }}>
                <div className="container">
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                    <h1 className="display-3 text-center text-white mb-3 animated slideInDown">
                        Rooftop Solar Solutions
                    </h1>
                    <p className="fs-5 fw-medium text-center text-white">
                        Leveraging Rooftop Space for Efficient Electricity
                        Production in Industries and Residential Societies.
                    </p>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-[#FF4917] text-uppercase font-bold">
                            OUR HAPPY CLIENTS AND THEIR
                        </h6>
                        <h1 className="font-bold">Rooftop Installations</h1>
                    </div>
                </div>
            </div>
            <div className="lg:mx-20 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {projects.map(project => (
                        <Card
                            key={project.slug}
                            logo={project.client.logo}
                            slug={project.slug}
                            imageSrc="/card/solarroof.jpg"
                            client={project.client.name}
                            location={project.address}
                            capacity={project.capacity}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    baseUrl="/portfolio/rooftops"
                />
            </div>
        </>
    )
}

export default Rooftop
