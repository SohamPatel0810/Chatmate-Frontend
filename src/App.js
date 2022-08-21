import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import JoinChatRoom from "./components/JoinChatRoom/JoinChatRoom";
import ChatRoom from "./components/ChatRoom/ChatRoom";
const App = () => (
    <Router>
    <Routes>
    <Route index element={<JoinChatRoom />} />
    <Route path="chat-room" element={<ChatRoom />}/>
    </Routes>
    </Router>
)

export default App;