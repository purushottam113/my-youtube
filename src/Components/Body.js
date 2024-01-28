import React from 'react'
import SideBar from "./SideBar"
import {Outlet} from "react-router-dom"
import Header from './Header'
import { WatchPageShimmer } from './Shimmer'

const Body = () => {
  return (
    <>
    <Header />
    <div className='flex *:p-0 m-0 w-full'>
      <SideBar />
      <Outlet/>
      {/* <WatchPageShimmer /> */}
    </div>
    </>
  )
}

export default Body
