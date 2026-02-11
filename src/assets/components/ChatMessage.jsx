import dayjs from 'dayjs';
import userImage from '../images/user.png';
import botImage from '../images/robot.png';
import "../styles/ChatMessage.css";

export default function ChatMessage({ chatMessage }) {
  const time = dayjs().format('h:mma');
  const { sender, message } = chatMessage;
  return (
    <div
         className={`chat-message-container ${sender}-container`}
         aria-label={`${sender} message`}>
      {sender === 'bot' ?
      <>
        <img src={botImage} alt="" className="icon" />
        <div className="message-container">
          <span className="message">{message}</span>
          <span className="time" aria-hidden="true">{time}</span>
        </div>
      </> 
      : 
      <>
        <div className="message-container">
          <span className="message">{message}</span>
          <span className="time" aria-hidden="true">{time}</span>
        </div>
        <img src={userImage} alt="" className="icon" />
      </>}
    </div>
  );
}