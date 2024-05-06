import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'

function Layouts() {
  return (
    <div>
    <Header/>
   <Outlet/>
   <Footer/>
   </div>
  )
}

export default Layouts