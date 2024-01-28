import React from 'react'
import VideoCard from './VideoCard'
import { useEffect, useState } from 'react'
import { YouTube_Video_API } from '../utils/Constant'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import { MainContainerShimmer } from './Shimmer'
import { useDispatch } from 'react-redux'
import { OpenMenu } from '../utils/appSlice'

const MainContainer = () => {

  const[cardData, setCardData] = useState()

  const dispatch = useDispatch();
  dispatch(OpenMenu());
  
  useEffect(()=>{
    getVideoData();
  },[])

  const getVideoData = async ()=>{
    const data = await fetch(YouTube_Video_API)
    const json = await data.json()
    setCardData(json);
  }
  
  if (cardData==null) return <MainContainerShimmer/>;
  
  return (
    <div className="w-full md:w-11/12 h-auto flex flex-col items-center">
      <Buttons/>
      <div className='flex md:w-full justify-center flex-wrap bg-white'>
        {cardData.items.map((item)=>(
            <Link key={item.id} to={"watch?v="+item.id}>
              <VideoCard info = {item}/>
            </Link>)
        )}
      </div>
    </div>
  )
}

export default MainContainer;
