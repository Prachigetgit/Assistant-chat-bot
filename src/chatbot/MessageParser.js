class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage === "hi") {
      this.actionProvider.sayHello();
    }
    if (lowerCaseMessage === "hello") {
      this.actionProvider.sayHi();
    }
    // Add other conditions as needed
  }
}

export default MessageParser;
