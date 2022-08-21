import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import {JoinRoomWrapper} from './JoinChatRoom.style'

const JoinChatRoom = () => {

   const [userName,setUserName] = useState('')
   const [chatRoomName,setChatRoomName] = useState('')

  const nameInput = (event) => {
    setUserName(event.target.value)
  }

  const roomInput = (event) => {
    setChatRoomName(event.target.value)
  }

  const handleSubmit = (event) => {
    if(!userName || !chatRoomName){
      event.preventDefault();
    }
    else{
      event = null
    }
  }

  return (
    <JoinRoomWrapper>
      <div className='mini-container'>
      <h1 className='heading'>Join Chat</h1><hr className='break-line'></hr>
      <div className='inputs'>
      <input placeholder='Please provide your name' type="text" className="custom-input" onChange={nameInput}></input>
      <input placeholder='Please provide group name' type="text" className="custom-input" onChange={roomInput}></input>
      </div>
      <Link onClick={handleSubmit} to={`/chat-room?userName=${userName}&chatRoomName=${chatRoomName}`}>
      <button type="submit" className='btn'>Join</button>
      </Link>
      </div>
    </JoinRoomWrapper>
  )
}

export default JoinChatRoom