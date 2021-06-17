import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Chat modal import
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
//  Import action
import {
  userMessage,
  sendMessage,
} from '../../redux/action-creators/watsonAction';

const Chat = () => {
  // Handle Users Message
  const endOfMessages = useRef(null);
  const dispatch = useDispatch();

  const { messages: fetchMessages } = useSelector((state) => state.watson);

  var lastIndex = fetchMessages.slice(-1);

  useEffect(() => {}, [0]);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    dispatch(userMessage(newMessage));
    dispatch(sendMessage(newMessage));
  };

  return (
    <div>
      <Widget handleNewUserMessage={handleNewUserMessage} />
      <div className="convo-container">
        <div class="historyContainer">
          {lastIndex.map(
            (msg, id) =>
              msg.type === 'bot' && (
                <div key={id}>{addResponseMessage(msg.message)}</div>
              )
          )}
          <div ref={endOfMessages}></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
