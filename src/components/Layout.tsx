import React from 'react'
import Navbar from './Navbar'

interface Props {
    Comp: React.ComponentType
}

const Layout: React.FC<Props> = ({ Comp }) => {
    return (
        <div className='h-screen'>
            <Navbar />
            <Comp />
        </div>
    )
}

export default Layout