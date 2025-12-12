import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout