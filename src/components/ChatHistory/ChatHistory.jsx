import React from 'react'
import Scroller from 'react-scroll-to-bottom'
import Message from '../Message/Message'
import {ChatHistoryWrapper} from './ChatHistory.style'

const ChatHistory = ({chatHistory,userName}) => {
  return (
    <ChatHistoryWrapper>
    <Scroller>
        {
            chatHistory.map((message,index) => 
            <div key={index}>
                  <Message message={message} userName={userName}/>
            </div>
            )
          }
    </Scroller>
    </ChatHistoryWrapper>
  )
}

export default ChatHistory