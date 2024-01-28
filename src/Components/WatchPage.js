import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import LiveCmnt from './LiveCmnt';
import {Video_ID_API, API_KEY} from '../utils/Constant'
import { useDispatch } from 'react-redux';
import { closeMenu} from '../utils/appSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'
import { faShare, faDownload, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { WatchPageShimmer } from './Shimmer';

const WatchPage = () => {

  const [searcParam] = useSearchParams();
  const videoID = searcParam.get("v") 
  const[videoData, setVideoData] = useState()
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(closeMenu());
    getVideoData();
  },[])

  const getVideoData = async ()=>{
    const data = await fetch(Video_ID_API + videoID + "&key=" + API_KEY)
    const json = await data.json()
    console.log(json)
    setVideoData(json);
  }

  if (videoData===undefined) return <WatchPageShimmer />;
  
  const {channelTitle, title, publishedAt
  }= videoData.items[0].snippet
  const { description }= videoData.items[0].snippet.localized
  const {viewCount, likeCount}= videoData.items[0].statistics

  
  return (
    <>
    <div className='m-2 w-screen md:flex justify-center'>
      <div className="md:w-[850px] mt-2">
          <div className=""><iframe className='w-full h-[270px] md:w-[850px] md:h-[480px] border rounded-xl'  src={"https://www.youtube.com/embed/"+videoID+"?si=p4l-BNHi0FX5rZv6"} title="YouTube    video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
          <h1 className='font-semibold text-2xl my-2'>{title}</h1>
          <div className="md:flex justify-between">
            <div className="flex gap-2 mb-4">
              <div className="">
                <h1 className="font-semibold">{channelTitle}</h1>
                <h1 className="text-xs">44.9K subscribers</h1>
              </div>
              <button className="h-10 text-sm font-medium border bg-slate-100 px-6 rounded-full"><FontAwesomeIcon icon={faBell} />  Subscibe    <FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <div className="flex gap-2">
              <div className="">
                <button className="h-10 font-medium text-sm border bg-slate-100 px-6 rounded-l-full"><FontAwesomeIcon icon={faThumbsUp} /></button>
                <button className="h-10 font-medium text-sm border bg-slate-100 px-6 rounded-r-full"><FontAwesomeIcon icon={faThumbsDown} /></button>
              </div>
              <button className="h-10 text-sm font-medium border bg-slate-100 px-6 rounded-full"><FontAwesomeIcon icon={faShare}/>  Share</button>
              <button className="h-10 text-sm font-medium border bg-slate-100 px-6 rounded-full"><FontAwesomeIcon icon={faDownload} /> Download</button>
            </div>
          </div>
          <div className="bg-slate-100 my-4 px-2 border rounded-xl">
            <span className='font-semibold'>{viewCount/1000} k views</span>
            <span className='mx-6 font-semibold'>{publishedAt}</span>
            <div className="">
              <h1 className='font-semibold mt-4'>Discription:</h1>
              <h1 className="line-clamp-5">{description}</h1>
            </div>
          </div>
        </div>
      <div>
        <LiveCmnt />
      </div>
    </div>
    </>
  )
}

export default WatchPage
