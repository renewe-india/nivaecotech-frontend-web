import Image from '@/components/Image'
import { Bolt, Place } from '@mui/icons-material'

interface CardProps {
    logo?: {
        url?: string
        srcset?: string
    }
    imageSrc: string
    name: string
    phase: string
    slug: string
    type: string
    capacity: string // Change capacity type to string
    description: string | null
    address: string
    dateOfCommission: string | null
    client: string
    location: string
}

const ProjectCard: React.FC<CardProps> = ({
    logo,
    imageSrc,
    name,
    phase,
    slug,
    type,
    capacity,
    description,
    address,
    dateOfCommission,
    client,
    location,
}) => {
    // Function to convert capacity to MW
    const convertToMW = (capacity: string): string => {
        const numCapacity = parseFloat(capacity)
        return numCapacity > 500
            ? (numCapacity / 1000).toFixed(2) + ' MWh'
            : capacity + ' kWh'
    }

    return (
        <a
            href={slug ? `/${slug}` : '#'}
            className="no-underline block rounded-lg p-4 shadow-sm shadow-indigo-100">
            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt="solar"
                    width={300}
                    height={200}
                    className="h-56 w-full rounded-md object-cover"
                />
            )}

            <div className="mt-2">
                <div className="flex flex-row items-center justify-between gap-10 px-2">
                    {logo && logo.url && (
                        <Image
                            className="rounded-xl w-12 h-auto"
                            src={logo.url}
                            srcSet={logo.srcset}
                            alt={client}
                            width={70}
                            height={7}
                        />
                    )}
                </div>

                <div className="mt-6 flex flex-col gap-2 text-xs">
                    {name && <div className="font-medium text-lg">{name}</div>}
                    {phase && (
                        <div className="text-gray-500">Phase: {phase}</div>
                    )}
                    {type && <div className="text-gray-500">Type: {type}</div>}
                    {description && (
                        <div className="text-gray-500">
                            Description: {description}
                        </div>
                    )}
                    {address && (
                        <div className="text-gray-500">Address: {address}</div>
                    )}
                    {dateOfCommission && (
                        <div className="text-gray-500">
                            Date of Commission:{' '}
                            {new Date(dateOfCommission).toLocaleDateString()}
                        </div>
                    )}
                    {location && (
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <Place fontSize="small" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="mb-0 font-medium">{location}</p>
                            </div>
                        </div>
                    )}

                    {capacity && (
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <Bolt fontSize="medium" />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="mb-0 text-gray-500">Capacity</p>
                                <p className="mb-0 font-medium">
                                    {convertToMW(capacity)}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard
