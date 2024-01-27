import React from 'react'

const VideoCard = ({info}) => {

  const {channelTitle, title, thumbnails}= info.snippet
  const {viewCount}= info.statistics

  return (
    <div className='md:h-64 md:w-72 w-[450px] md:m-3 my-4 md:p-2 items-start'>
      <img src={thumbnails.medium.url} alt="" className=" md:h-40 md:w-auto w-full border rounded-xl" />
      <h1 className="font-medium line-clamp-2">{title}</h1>
      <p className="text-xs font-medium text-gray-500">{channelTitle}</p>
      <span className='text-xs mr-2 font-medium text-gray-500'>{viewCount}</span>
      <span className='text-xs font-medium text-gray-500'>6 months ago</span>
    </div>
  )
}

export default VideoCard
