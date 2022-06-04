import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='BrandLogo'>
                <Link to={'/'}>Logo</Link>

            </div>
            <div className='Menu'>
                <Link to={'/about'} >About</Link>
                <Link to={'/contact'} >Contact</Link>
            </div>
        </div>
    )
}

export default Header