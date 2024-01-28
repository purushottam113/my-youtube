import React from 'react'
import { useEffect, useState } from 'react'
import { API_KEY, YouTube_Search_API, YouTube_Video_API } from '../utils/Constant'
import Buttons from './Buttons'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { OpenMenu } from '../utils/appSlice'
import SearchVideoCard from './SearchVideoCard'
import { SearchContainerShimmer } from './Shimmer'

const SearchContainer = () => {

  const[cardData, setCardData] = useState()
  const [searcParam] = useSearchParams();
  const videoID = searcParam.get("search_query") 

  const dispatch = useDispatch();

  
  dispatch(OpenMenu())
  
  useEffect(()=>{
    SearchVideo();
  },[videoID])

  const SearchVideo = async ()=>{
    console.log("serch")
    const data = await fetch(YouTube_Search_API + videoID + "&key=" + API_KEY)
    const json = await data.json()
    setCardData(json?.items?.slice(1))
  }
  
  if (cardData==null) return <SearchContainerShimmer/>;
  
  return (
    <div className="w-full">
      <Buttons/>

      <div className='flex flex-wrap w-full justify-center'>
        {cardData?.map((item,index)=>(
              <SearchVideoCard key= {index} info = {item}/>
          )   
        )}
      </div>
    </div>
  )
}

export default SearchContainer;
