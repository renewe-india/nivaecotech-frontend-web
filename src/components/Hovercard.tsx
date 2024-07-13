import { HovercardItems } from '@/constants/constants'
import { DirectionAware } from './ui/direction-aware-hover'

interface DynamicCardProps {
    src: string
    title: string
    description: string
}

function DynamicCard({ src, title, description }: DynamicCardProps) {
    return (
        <div className="h-full relative  flex items-center justify-center">
            <div className="h-full relative  flex flex-col items-center justify-center">
                <DirectionAware imageUrl={src}>
                    <p className="font-normal text-sm">{description}</p>
                </DirectionAware>
                <div className=" flex items-center justify-center">
                    <p className="mb-0 mx-2 font-bold text-xl">{title}</p>
                </div>
            </div>
        </div>
    )
}

export const DynamicCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-20 px-4">
            {HovercardItems.map(Items => (
                <DynamicCard key={Items.src} {...Items} />
            ))}
        </div>
    )
}

export default DynamicCards
