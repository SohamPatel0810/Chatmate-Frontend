import React from 'react'
import ReactEmoji from 'react-emoji'
import {MessageWrapper} from './Message.style'

const Message = ({message:{user,text},userName}) => {
    
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    let activeUser = false

    const trimmedUserName = userName.trim().toLowerCase();
    if(user.toLowerCase() === trimmedUserName){
        activeUser=true
    }
  return (
    <div>
    <MessageWrapper>
    { activeUser &&
        <div className='right-container'>
            <p className='message'>{ReactEmoji.emojify(text)}</p>
        </div>
        }
        {!activeUser &&
            <div className='left-container'>
            <p style={{color:`#${randomColor}`}}className='sender-name'>{user.charAt(0).toUpperCase()+user.slice(1)}</p>
            <p className='message'>{ReactEmoji.emojify(text)}</p>
            </div>
        }
    </MessageWrapper>

    </div>
    
)
}

export default Message