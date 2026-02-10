import { useRef, useState } from "react";
import { chatbot } from "../utilities/chatbot";
import "../styles/ChatInput.css";

export default function ChatInput({ chatMessages, setChatMessages }) {

  const ref = useRef(null);
  
  const [value, setValue] = useState("");

  function sendMessage() {
    const message = ref.current.value;
    if (message.trim() === "") {return};
    const userMessage = { sender: "user",
                          message: message,
                          key: crypto.randomUUID() }
    const newMessages = [...chatMessages, userMessage];
    const chatbotResponse = chatbot(message);
    newMessages.push(chatbotResponse);
    setChatMessages(newMessages);
    setValue("");
  }

  return (
    <section className="chat-input-container">
      <input type="text" 
             aria-label="message box"
             placeholder="Send a message to Chatbot" 
             value={value} 
             ref={ref} 
             onChange={() => setValue(ref.current.value)} 
             onKeyDown={(e) => e.key === "Enter" && sendMessage()}/>
      <button onClick={sendMessage}>Send</button>
    </section>
  );
}