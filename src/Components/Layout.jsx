import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-800'>
        <Header/>
        <main className=' min-h-screen w-screen'>
        {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout