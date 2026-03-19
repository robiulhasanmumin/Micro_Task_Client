import React from 'react'
import Navber from '../component/Navber'
import { Outlet } from 'react-router'  
import Footer from '../component/Footer'

const RootLayout = () => {
  return (
     <div className="flex flex-col min-h-screen font-inter">
      
       <Navber />

       <main className="flex-grow">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>

       <Footer />
    </div>
  )
}

export default RootLayout