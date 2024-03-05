import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <Sidebar />
            <div>
                <Header />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
