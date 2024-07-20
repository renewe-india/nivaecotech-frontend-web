import { ScaleLoader } from 'react-spinners'

const Loading = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-inherit flex flex-col ">
            <ScaleLoader color="#55B04F" height={50} width={6} radius={2} />
            Loading
        </div>
    )
}

export default Loading
