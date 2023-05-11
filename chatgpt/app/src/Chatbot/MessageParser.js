class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const ham = message
      if (ham=="Ham"){
        this.actionProvider.greet()
      }
    }
  }
  
  export default MessageParser;