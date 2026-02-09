import ChatMessages from './assets/components/ChatMessages';
import ChatInput from './assets/components/ChatInput';
import { useState } from 'react'
import './App.css'

export default function App() {

  const [chatMessages, setChatMessages] = useState([]);

  return (
    <>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
      <ChatMessages chatMessages={chatMessages} />
    </>
  )
}