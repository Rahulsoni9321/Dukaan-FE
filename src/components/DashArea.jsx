import React from 'react'
import Navbar from './Navbar'
import MainArea from './MainArea'

const DashArea = () => {
  return (
    <div className='flex-grow  flex flex-col overflow-y-auto'>
       <Navbar></Navbar>
       <MainArea></MainArea>
    </div>
  )
}

export default DashArea
