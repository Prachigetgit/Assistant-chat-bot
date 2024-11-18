import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/chatbotConfig";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import "react-chatbot-kit/build/main.css";

function App() {
  return (
    <div className="App">
      <h1>Eco-Friendly Shopping Assistant</h1>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}

export default App;
