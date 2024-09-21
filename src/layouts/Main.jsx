import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'


function Main() {
  return (
    <div>
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}

export default Main;