import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-800'>
        <Header/>
        <main className='no-scrollbar min-h-screen w-full'>
        {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout