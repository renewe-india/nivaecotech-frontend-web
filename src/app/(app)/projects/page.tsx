import Pagination from '@/components/Pagination'
import axios from '@/lib/axios'
import ProjectCard from './ProjectCard'

interface Project {
    tenant_id: string
    name: string
    phase: string
    slug: string
    type: string
    capacity: string
    description: string | null
    address: string
    date_of_commission: string | null
    created_at: string
    updated_at: string
}

const fetchProjects = async (
    page: number,
): Promise<{ projects: Project[]; totalPages: number }> => {
    try {
        const response = await axios.get(
            `api/tenant/portfolio/projects?page=${page}`,
        )
        return {
            projects: response.data.data,
            totalPages: response.data.meta.last_page,
        }
    } catch (error) {
        return { projects: [], totalPages: 1 }
    }
}

const page = async ({ searchParams }: { searchParams: { page?: string } }) => {
    const currentPage = parseInt(searchParams.page || '1', 10)
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
                        Solar Projects
                    </h1>
                    <p className="fs-5 fw-medium text-center text-white">
                        Your Partner in Developing High-Performance Projects.
                    </p>
                    <hr className="w-full h-3 mx-auto bg-white border-0 rounded dark:bg-gray-700" />
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-[#FF4917] text-uppercase font-bold">
                            WE ARE PROUD OF OUR
                        </h6>
                        <h1 className="font-bold">
                            Open Access Utility Scale Solar Projects
                        </h1>
                    </div>
                </div>
            </div>
            <div className="lg:mx-20 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.slug}
                            slug={project.slug}
                            imageSrc="/card/solarroof.jpg"
                            name={project.name}
                            phase={project.phase}
                            type={project.type}
                            capacity={project.capacity}
                            description={project.description}
                            address={project.address}
                            dateOfCommission={project.date_of_commission}
                            client={project.name}
                            location={project.address}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    baseUrl="/projects"
                />
            </div>
        </>
    )
}

export default page
