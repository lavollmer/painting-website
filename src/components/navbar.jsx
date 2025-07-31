import React from 'react'
import '../App.css'

const navbar = () => {
    return (
        <div className='flex flex-row space-evenly'>
            <div className='flex flex-row'>
                <h1>Logo</h1>
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