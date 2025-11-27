import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/shared/Footer/Footer'

const Root = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen font-jost text-slate-900">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    </>
  )
}

export default Root