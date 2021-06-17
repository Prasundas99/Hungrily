import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//Chat modal import
import { Widget, addResponseMessage  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
//  Import action
import { userMessage, sendMessage } from "../../redux/action-creators/watsonAction";


const Chat = () => {
  // Handle Users Message
  const [message , setmessage] = useState("");
  const endOfMessages = useRef(null);
  const dispatch = useDispatch();

  const { messages: fetchMessages } = useSelector((state) => state.watson);


  useEffect(() => {
    
      addResponseMessage("fetchMessages")


  }, [0]);


  const handleNewUserMessage = async(newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
     await dispatch(userMessage(newMessage));
      dispatch(sendMessage(newMessage));
  };



  return (
    <div>
 <Widget 
    handleNewUserMessage={handleNewUserMessage}
    />
      <div className="convo-container">
        <div class="historyContainer">
          {fetchMessages.length === 0
            ? "Enter Your Message to start to chat"
            : fetchMessages.map((msg) => msg.type === "user"  ? (
                " " ) : (

                <div>
                 {addResponseMessage(msg.message)}</div>
           ))}
          <div ref={endOfMessages}></div>
        </div>
      </div>   
    </div>
  );
};

export default Chat;
