import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {

    const buttons = ["All", "Mixes", "Music", "Trailers", "React", "Technology", "Gaming", "Live", "News", "Movies", "SuperHero", "Cricket", "Anime","js", "Marvel", "JavaScript"]

    const navigate = useNavigate();

    const btnHandler = (title)=>{
      navigate("/results?search_query=" + title)
    }

  return (
    <div className='flex w-full overflow-x-hidden justify-center'>
       { buttons.map((title)=>(
            <button className='px-2 py-1 m-2 text-sm font-normal bg-gray-200 rounded-lg hover:bg-slate-300' key={title}
              onClick={()=>{btnHandler(title)}} 
            >
              {title}
            </button>
        ))}
    </div>
  )
}

export default Buttons
