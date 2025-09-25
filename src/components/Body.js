import React from 'react'
import SiderBar from './SiderBar'

import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid  grid-flow-col'>
      <SiderBar/>
      <Outlet/>
    </div>
  )
}

export default Body
