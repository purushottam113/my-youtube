import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchVideoCard = ({info}) => {

    const {channelTitle, title, thumbnails}= info.snippet
    const navigate = useNavigate()

  
    return (
      <div className='= w-full md:w-9/12 p-2 m-2 md:flex gap-2'
        onClick={()=>{navigate("/watch?v="+info.id?.videoId)}}
      >
        <div className='md:w-4/12 w-[450px] md:mr-2'>
            <img src={thumbnails.medium.url} alt="" className="rounded-lg w-full object-cover" />
        </div>
        <div className="w-8/12">
            <h1 className="font-medium line-clamp-2 py-1">{title}</h1>
            <span className='text-xs font-medium text-gray-500'>6 months ago</span>
            <p className="text-xs font-medium text-gray-500 py-4">{channelTitle}</p>
        </div>
      </div>
    )
}

export default SearchVideoCard
