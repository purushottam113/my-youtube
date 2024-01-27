import React, { useState } from 'react'
import Menu from "../Assets/Menu.png"
import Logo from "../Assets/tube.png"
import Profile from "../Assets/profile.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom'
import { faMagnifyingGlass, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearLoginDetails } from '../utils/credentialSlice'
import SearchBar from './SearchBar'


const Header = () => {

  const[mobileScreen, SetMobileScreen] = useState(true)

  const loginDetails = useSelector(store => store.login?.loginDetails[0]?.email)

  const dispatch = useDispatch();

  const taggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }


  return (
    <div className='flex h-12 sm:h-16 justify-between items-center shadow-lg px-2 w-full'>
      {mobileScreen &&<div className="flex items-center w-4/12">
        <img className="h-8 cursor-pointer" src={Menu} alt="MenuIcon" onClick={()=>{taggleMenuHandler()}} />
        <Link to="/"><img className='h-20' src={Logo} alt="Logo" /></Link>
      </div>}
    
          {<SearchBar screen = {mobileScreen} />}
  
      <div className="flex justify-end items-center w-4/12 ">
        <div className="p-auto mx-2 sm:hidden">
          <button className='border-2 border-slate-300 bg-slate-100 rounded-full h-9 w-9'
            onClick={()=>{SetMobileScreen(!mobileScreen)}}
            ><FontAwesomeIcon icon={ mobileScreen ?
              faMagnifyingGlass : faArrowLeft
            } />
          </button>
        </div>
        


        {mobileScreen && 
          (loginDetails ?
             <> <div className="bg-red-600 rounded-full h-11 w-11 flex justify-center items-center text-white font-bold text-xl ">{loginDetails[0].toUpperCase()}</div>
               <button className="bg-slate-100 px-3 py-2 mx-2 rounded-lg font-medium text-sm " 
               onClick={()=>(
                   dispatch(clearLoginDetails())
                  )
                 }> 
                 LogOut
               </button>
            </>
            :
           <>
              <img className='h-11' src={Profile} alt="Profile" />                 
              <button className="bg-slate-100 px-3 py-2 mx-2 rounded-lg font-medium text-sm " 
                onClick={()=>{
                    dispatch(clearLoginDetails())
                  }
                }> 
                <Link to="login"> LogIN </Link>
              </button>
              </>)}


      </div>
    </div>
  )
}

export default Header
