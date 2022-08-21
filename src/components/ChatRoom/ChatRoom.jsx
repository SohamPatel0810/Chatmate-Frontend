import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { ChatRoomWrapper } from './ChatRoom.style'
import TopBar from '../TopBar/TopBar';
import CustomInput from '../CustomInput/CustomInput';
import ChatHistory from '../ChatHistory/ChatHistory';
import queryString from 'query-string'
import io from 'socket.io-client'

let socket;

const ChatRoom = () => {

  const location = useLocation();

  const [userName, setUserName] = useState('')
  const [chatRoomName, setChatRoomName] = useState('')
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const [userList, setUserList] = useState([]);
  const BACKEND_PORT = 'https://chatmate-backend.herokuapp.com/';

  useEffect(() => {
    const { userName, chatRoomName } = queryString.parse(location.search);

    socket = io(BACKEND_PORT, { transports: ['websocket', 'polling', 'flashsocket'] })

    setUserName(userName);
    setChatRoomName(chatRoomName);

    socket.emit('join', { userName, chatRoomName }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnection');
      socket.off();
    }

  }, [BACKEND_PORT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setChatHistory([...chatHistory, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUserList([users]);
    });
  }, [chatHistory]);

  const inputHandler = (event) => {
    setMessage(event.target.value)
  }

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  const submitHandler = (event) => {
    if (event.key === 'Enter') {
      sendMessage(event)
    }
  }

  return (
    <ChatRoomWrapper>
      <div className='mini-container'>
        <TopBar chatRoomName={chatRoomName} userList={userList} />
        <ChatHistory chatHistory={chatHistory} userName={userName} />
        <CustomInput message={message} inputHandler={inputHandler} submitHandler={submitHandler} sendMessage={sendMessage} />
      </div>
    </ChatRoomWrapper>
  )
}

export default ChatRoom;