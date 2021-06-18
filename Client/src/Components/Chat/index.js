import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Chat modal import
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './style.css'
//  Import action
import {
  userMessage,
  sendMessage,
} from '../../redux/action-creators/watsonAction';

import { createUserFoodRequest } from '../../redux/action-creators/';

const Chat = () => {
  // Handle Users Message
  const endOfMessages = useRef(null);
  const widgetRef = useRef(null);
  const dispatch = useDispatch();
  const userInputPreference = 'veg';

  const { messages: fetchMessages } = useSelector((state) => state.watson);
  const lastIndex = fetchMessages.slice(-1);

  /**MIND THE EXTRA SPACE (POTENTIAL BUG ELEMENT) */

  useEffect(() => {
    if (widgetRef) {
      if (fetchMessages) {
        if (
          lastIndex.length > 0 &&
          lastIndex[0].message === 'okay we will reach to  you.'
        ) {
          dispatch(createUserFoodRequest({ preference: userInputPreference }));
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, fetchMessages]);

  // if (lastIndex) {
  //   console.log('last index logging');
  // }

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    dispatch(userMessage(newMessage));
    dispatch(sendMessage(newMessage));
  };

  return (
    <div>
      <Widget 
      ref={widgetRef}
       handleNewUserMessage={handleNewUserMessage}
       title="Ask Hungrily"
       subtitle="" />
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
