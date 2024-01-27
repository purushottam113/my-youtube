import React, { useEffect, useState } from 'react'
import { Suggestion_API } from '../utils/Constant'
import { Link, useNavigate } from 'react-router-dom'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({screen}) => {
    
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("")
    const [suggesions, setSuggesions] = useState([])
    const [suggBox, setSuggBox] = useState(false)


    
    const suggestionHandler = async ()=>{
      const data = await fetch(Suggestion_API + searchValue)
      const json = await data.json()
      setSuggesions(json[1])
    }
    
    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    };
    
    
    useEffect(()=>{
      
      const timer = setTimeout(() => {
        suggestionHandler();
      }, 200);
      setSuggBox(true)
      return ()=>{clearTimeout(timer)}

    },[searchValue])
    
    
    const handleClick  = (item) => {
      setSelectedValue(item)
      navigate("/results?search_query=" + item)
      setSuggBox(false)
    }; 
    
    const debouncedHandleClick = debounce(handleClick, 200);
  

  return (
  
    <div className= {screen ? "hidden w-full sm:flex self-center sm:w-4/12": "w-full self-center flex"}>
      <div className=" w-full">
        <input type="text" value={selectedValue} className="border-2 border-slate-200 w-full rounded-l-full px-2 h-11 outline-sky-500" placeholder='Search'
          onChange={(e)=>{
            setSelectedValue(e.target.value)
            setSearchValue(e.target.value)}}
            />
        {suggBox && <ul className='bg-white rounded-lg w-[18rem] ml-2 md:m-0  md:w-[440px] shadow-2xl absolute'>
          {suggesions.map((item)=>( <li className='px-2 py-1 rounded-lg m-1 hover:bg-slate-100' 
            onClick={()=>{debouncedHandleClick(item);
            }}
            key={item} >{item}</li>))
          }
        </ul>}
      </div>
    <Link to={"/results?search_query=" + selectedValue}>
      <button className='border-2 border-slate-200 bg-slate-200 px-3 pr-4 rounded-r-full h-11'><FontAwesomeIcon className='text-3xl' icon={faMagnifyingGlass} /></button>
    </Link>
  </div>
  )
}

export default SearchBar
