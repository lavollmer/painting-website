import '../App.css'

const navbar = () => {
    return (
        <div className='flex flex-row space-x-10 p-10 items-stretch content-center w-100%'>
            <div className='flex flex-column space-x-2 font-sans font-bold'>
                <h1 className='text-lg'>Painted Places By Laura</h1>
            </div>
            <div className='flex flex-row space-x-4'>
                <h2>Shop</h2>
                <h2>Commissions</h2>
                <h2>Gallery</h2>
                <h2>About</h2>
                <h2>FAQ</h2>
                <h2>Contact</h2>
            </div>
        </div>
    )
}

export default navbar