import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg"
import Profile from "../Assets/profile.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link, useNavigate } from 'react-router-dom'
import { faMagnifyingGlass, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { clearLoginDetails } from '../utils/credentialSlice'
import SearchBar from './SearchBar'


const Header = () => {

  const[mobileScreen, SetMobileScreen] = useState(true)
  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/");
    window.location.reload()
  }

  const loginDetails = useSelector(store => store.login?.loginDetails[0]?.email)

  const dispatch = useDispatch();

  const taggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }


  return (
    <div className='flex h-12 sm:h-12 justify-between items-center px-2 w-full mb-2'>
      {mobileScreen &&<div className="flex items-center w-4/12">
        <div className="text-2xl w-9 h-9 cursor-pointer rounded-full hover:bg-slate-100 flex items-center justify-center"><FontAwesomeIcon className='' icon={faBars} onClick={()=>{taggleMenuHandler()}}/></div>
        <img className='h-20' src={Logo} alt="Logo" onClick={()=>(goHomeHandler())}/>
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
             <> <div className="bg-red-500 rounded-full h-9 w-9 flex justify-center items-center text-white font-bold text-xl ">{loginDetails[0].toUpperCase()}</div>
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
              <img className='h-9' src={Profile} alt="Profile" />                 
              <button className="bg-slate-100 px-3 py-2 mx-2 border-2 border-gray-700 rounded-lg font-medium text-sm " 
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
