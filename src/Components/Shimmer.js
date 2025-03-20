export const MainContainerShimmer = () => {

  return (
      <div className='flex md:w-full justify-center flex-wrap bg-white'>
        {Array(10).fill("").map((e,index)=>(
            <div className='md:h-64 md:w-72 w-[450px] md:m-3 my-4 md:p-2 items-start' key={index}>
                <div className="h-40 md:w-auto w-full border rounded-xl mb-2 bg-slate-200"></div>
                <div className="font-medium line-clamp-2 h-5 bg-slate-200 mb-2 rounded-lg"></div>
                <p className="text-xs font-medium bg-slate-200 h-5 rounded-lg "></p>
            </div>            
        ))}
    </div>
  )
}


export const SearchContainerShimmer = () => {

    return(
        <div className="flex flex-col w-full items-center">
            {Array(10).fill("").map((e,index)=>(
                <div className= "w-full h-52 md:w-9/12 p-2 m-2 md:flex gap-2" key={index}>
                    <div className='md:w-4/12 w-[450px] md:mr-2 h-48 bg-slate-100 rounded-xl'></div>
                    <div className="w-8/12">
                        <div className="font-medium line-clamp-2 p-1 mb-2 h-14 bg-slate-100 rounded-xl"></div>
                        <p className=" py-4 h-8 mb-2  bg-slate-100 rounded-xl"></p>
                        <p className=" py-4 h-8 mb-2  bg-slate-100 rounded-xl"></p>
                        <p className=" py-4 h-8  bg-slate-100 rounded-xl"></p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const WatchPageShimmer = () => {
    return(<>
        <div className='m-2 h-screen w-11/12 mt-2 md:flex justify-center gap-4'>
            <div className="md:w-[860px] h-screen">
                <div className="md:w-[850px] h-96 bg-slate-200 rounded-lg"></div>
                <div className='h-12 w-full  bg-slate-200 rounded-lg my-4'></div>
                <div className='h-12 w-full  bg-slate-200 rounded-lg my-4'></div>
                <p className="h-48 w-full  bg-slate-200 rounded-lg my-4 "></p>
            </div>
            <div className="w-80 h-6/12">
                <div className="h-14 w-full bg-slate-200 rounded-lg"></div>
                <div className="h-96 w-full bg-slate-200 rounded-lg my-1"></div>
                <div className="h-14 w-full bg-slate-200 rounded-lg"></div>
            </div>
        </div></>
    )
}

