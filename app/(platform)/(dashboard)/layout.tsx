import React from 'react'
import Navbar from './_components/navbar'

function DashboardLayout({children} : {children: React.ReactNode}) {
  return (
    <div className='h-full'>
        <Navbar />
        <div>{children}</div>
    </div>
  )
}

export default DashboardLayout