import '../App.css'

const navbar = () => {
    return (
        <div className='flex flex-row space-x-10 p-10 items-stretch content-center'>
            <div className='flex flex-column space-x-2 font-sans font-bold'>
                <h1 className='text-lg'>Homes & Halls By Laura</h1>
            </div>
            <div className='flex flex-row space-x-4'>
                <h2>About</h2>
                <h2>Pricing</h2>
                <h2>Inquires</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}

export default navbar