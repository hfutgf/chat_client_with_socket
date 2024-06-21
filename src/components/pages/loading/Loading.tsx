import { Loader } from 'lucide-react'

const Loading = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center '>
            <Loader size={32} className='animate-spin' />
        </div>
    )
}

export default Loading