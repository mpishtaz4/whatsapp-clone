import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'
import "./Display.css"

const Display = ({username, message}) => {
    const isUser = username===message.username;
    return (
        <div className="chat_body">
        <div className={`message ${isUser && `message__user`}`}>
      <Card  className={`message ${isUser ? "message__userCard" : "message__guestCard"}`}>
          <CardContent>
              <Typography
              color="white"
              variant="p"
              component="h4"
              >
                {message.username}:{message.text}
              </Typography>
          </CardContent>
      </Card>
      </div>
      </div>
    
    )
}
export default Display;


