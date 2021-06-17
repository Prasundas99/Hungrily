import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

//  Import action
import { userMessage, sendMessage } from "../../redux/action-creators/watsonAction";

import "./style.css";

const Chat = () => {
  // Handle Users Message
  const [message, setMessage] = useState("");
  const endOfMessages = useRef(null);
  const dispatch = useDispatch();

  const { messages: fetchMessages } = useSelector((state) => state.watson);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [fetchMessages]);

  //  Function that handles user submission
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      // console.log(message);
      dispatch(userMessage(message));
      dispatch(sendMessage(message));
      setMessage("");
    }
  };

  const click = () =>{

  }

  return (
    <div className="body" id="app-container">
      <div className="convo-container">
        <h1>Chatty the Chatbot</h1>
        {/* Handle Messages */}
        <div class="historyContainer">
          {fetchMessages.length === 0
            ? "Enter Your Message to start to chat"
            : fetchMessages.map((msg) => msg.type === "user"  ? (
                <div className="user-message-container">{msg.message}</div> ) : (

                <div className="bot-message-container">
                  {msg.message}</div>
           ))}
          <div ref={endOfMessages}></div>
        </div>
        {/* Input Box */}
        <input
          id="chat"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleClick}
          value={message}
          placeholder="type in your text to chat"
        ></input>
        <br/>
        <button onClick='' >Click to continue</button>
      </div>
    </div>
  );
};

export default Chat;
