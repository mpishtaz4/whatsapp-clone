import React, {useState,useEffect} from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
import { useParams } from 'react-router-dom';
import Display from './Display';


function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([
        {username:"john", text:"Hey what's up"}, 
        {username:"Ali", text:"hey yoooo"},
    ]);
    const [username, setUsername] = useState("");
    useEffect(()=>{
        setUsername (prompt("pleas enter your name"))
 
     }, [] ) 

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, [roomId]);

    const sendMessage =(e)=>{
        e.preventDefault();
        setMessages([{username:username, text:input},...messages]);
        setInput("");
    }
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className='chat_headerInfo'>
                    <h3 className='chat-room-name'>{roomName}</h3>
                    <p className='chat-room-last-seen'>
                           
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                    
                </div>
            </div> 
            <div className='chat_footer'>
                <IconButton>
                <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message..."/>
                    <button type="submit" onClick={sendMessage}> Send</button>
                </form>
                <IconButton>
                <MicIcon/>
                </IconButton>
            </div>
            {
                messages.map(message =>(
                    <Display message={message} username={username}/>
                ))
            }
            
        </div>
    )
}

export default Chat
