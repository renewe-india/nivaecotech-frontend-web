import Card from '@/components/ui/card'
import axios from 'axios'

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
        logo: string
    }
}

const fetchProjects = async (): Promise<Project[]> => {
    try {
        const response = await axios.get(
            'https://app.nivaecotech.com/api/projects/ground-mounted',
        )
        return response.data.data
    } catch (error) {
        return []
    }
}

const SolarParks = async () => {
    const projects = await fetchProjects()

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
                        Solar Parks
                    </h1>
                    <p className="fs-5 fw-medium text-center text-white ">
                        Your Partner in Developing High-Performance Solar Parks.
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
                            Open Access Utility Scale Solar Parks
                        </h1>
                    </div>
                </div>
            </div>
            <div className="lg:mx-20 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map(project => (
                        <Card
                            key={project.slug}
                            logo={project.client.logo}
                            slug={project.slug}
                            imageSrc="/card/solarpark.jpg"
                            client={project.client.name}
                            location={project.address}
                            capacity={project.capacity}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SolarParks
