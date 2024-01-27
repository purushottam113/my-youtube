import { useEffect, useState } from "react"
import React from 'react'
import logo from "../Assets/profile.png"
import { Live_chat } from '../utils/Constant'
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from '../utils/chatSlice';
import { RandomNameGenrator } from '../utils/helper'

const Comment = ({name}, {message}) => {

  const[chatMsg, setChatMsg] = useState("")

  const dispatch = useDispatch();

  const chatMessage = useSelector((store)=> store.chat.messages)


  useEffect(()=>{
    const timer = setInterval(()=>{
      dispatch(
        addMessages({
          name: RandomNameGenrator(),
          message:"This is live chat 😃"
        })
      )
    },1000)
    return ()=> clearInterval(timer)
  },[])

  // const chatMsgSubmit = ()=>{

  // }

  // <div className='mt-2 mx-10 w-96 h-[480px] border border-black overflow-y-scroll flex flex-col-reverse'>


  return (
    <>
    <div className="py-2">
      <div className="border border-black mx-10 rounded-t-md w-96 h-10 flex items-center px-4 font-semibold">Live Chat</div>
    <div className="py-2mt-2 mx-10 w-96 h-[440px] border border-x-black overflow-y-scroll flex flex-col-reverse">
      {
      chatMessage.map((c, index)=>(
        <div key={index} className='p-2 flex items-center'>
          <img src={logo} alt=""className="h-5 w-5"/>
            <div className="">
                <span className="font-semibold text-sm mx-2">{c.name}</span>
                <span className="text-sm">{c.message}</span>
            </div>
        </div>
      ))}
    </div>
      <form className="border border-black border-t-0 rounded-b-md w-96 h-10 flex justify-center items-center mx-10"
          onSubmit={
            (e)=>{
              e.preventDefault();
              dispatch(
                addMessages({
                  name: "Purushottam Tulse",
                  message: chatMsg
                })
              )
              setChatMsg("")
            }
        } 
      >
        <input type="text" placeholder="Chat" className="w-4/5 px-2 outline-none border rounded-l-md" value={chatMsg}
          onChange={(e)=>{setChatMsg(e.target.value)}}
        />
        <button typeof="submit" className='bg-slate-100 border px-2 rounded-r-md cursor-pointer'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Comment
