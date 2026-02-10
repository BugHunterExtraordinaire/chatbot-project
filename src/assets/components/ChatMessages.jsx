import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage.jsx";
import "../styles/ChatMessages.css";

export default function ChatMessages({ chatMessages }) {
  
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <section className="chat-messages-container" ref={ref}>
      {chatMessages.map((chatMessage) => <ChatMessage chatMessage={chatMessage} />)}
    </section>
  );
}