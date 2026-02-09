import dayjs from 'dayjs';
import userImage from '../images/user.png';
import botImage from '../images/robot.png';
import "../styles/ChatMessage.css";

export default function ChatMessage({ chatMessage }) {
  const time = dayjs().format('h:mma');
  const { sender, message, key } = chatMessage;
  return (
    <div key={key} className={`chat-message-container ${sender}-container`}>
      {sender === 'bot' ?
      <>
        <img src={botImage} alt="Bot Images" className="icon" />
        <div className="message-container">
          <span className="message">{message}</span>
          <span className="time">{time}</span>
        </div>
      </> 
      : 
      <>
        <div className="message-container">
          <span className="message">{message}</span>
          <span className="time">{time}</span>
        </div>
        <img src={userImage} alt="User Images" className="icon" />
      </>}
    </div>
  );
}