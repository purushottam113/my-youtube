import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPause, faServer, faUser, faClockRotateLeft, faClock, faFire, faBagShopping, faMusic, faGamepad, faTowerBroadcast, faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { closeMenu } from '../utils/appSlice';
import { useRef } from 'react'

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  const windowWidth = useRef(window.innerWidth);


  if(windowWidth.current<600) {dispatch(closeMenu())}

  if(!isMenuOpen) return null;


  
  return (
    <div className="flex flex-col items-center absolute md:static bg-white w-2/4 sm:w-44 m-1  ">
      <ul className="font-medium w-full py-2 border-b-2 border-slate-300  ">
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><Link to="/"><FontAwesomeIcon className='mr-3' icon={faHouse}/> Home</Link></li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faPause} /> Shorts</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faServer} /> Subscription</li>
      </ul>

      <ul className="font-medium w-full p-2 border-b-2 border-slate-300">
        <h1 className="font-bold">You</h1>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faUser} /> Your Chanel</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"> <FontAwesomeIcon className='mr-3' icon={faClockRotateLeft} /> History</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faClock} /> Watch Later</li>
      </ul>

      <ul className="font-medium w-full p-2">
        <h1 className="font-bold">Explore</h1>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faFire} /> Trending</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faBagShopping} /> Shoping</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faMusic} /> Music</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faClapperboard} /> Film</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faTowerBroadcast} /> Live</li>
        <li className="w-full p-2 px-4 hover:bg-slate-100 hover:rounded-lg"><FontAwesomeIcon className='mr-3' icon={faGamepad} /> Gaming</li>
      </ul>
    </div>
  )
}

export default SideBar
