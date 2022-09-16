import React from 'react'
import VideoCam from "../img/videocam4.png"
import Contactadd from "../img/addcontact.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo"> 
        <span>Jane</span>
          <div className="chatIcons">
            <img src={VideoCam} alt="" />
            <img src={Contactadd} alt="" />
            <img src={More} alt="" />
          </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat