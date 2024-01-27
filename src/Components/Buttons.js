import React from 'react'

const Buttons = () => {

    const buttons = ["All", "Mixes", "Music", "Trailers", "React", "Technology", "Gaming", "Live", "News", "Movies", "Mixes", "Music", "Trailers", "React", "Technology", "Gaming", "Live"]

  return (
    <div className='flex w-full overflow-x-hidden justify-center'>
       { buttons.map((title)=>(
            <button className='px-2 py-1 m-2 text-sm font-normal bg-gray-200 rounded-lg w-' key={title}>
                {title}
            </button>
        ))}
    </div>
  )
}

export default Buttons
