import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const config = {
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  botName: "EcoBot",
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
