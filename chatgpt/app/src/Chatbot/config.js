import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Option from "../components/Options/Options";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?" 

    ),
  ]

}

export default config