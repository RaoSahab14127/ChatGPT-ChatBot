import React from "react";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import config from "./chatbot/config"
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css';

function CApp() {
  return (
    <div className="CApp" style={{ maxWidth : "600px", position:"fixed", height: "500px", width: "300px", bottom: "-1px",right:"-1px" , padding : "0px" }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default CApp;




