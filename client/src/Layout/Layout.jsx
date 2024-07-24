// importing packages
import React from 'react'
import {Outlet} from 'react-router-dom'

// importing components
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'


function Layout() {
  return (
    <div>
       <Navbar /> {/* navbar */}
       <Outlet /> {/* pages */}
       <Footer /> {/* Footer */}
    </div>
  )
}

export default Layout