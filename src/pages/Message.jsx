// import "../style/Message.css";

function Message({ message }) {
  return (
    <div className="message">
      <span>⚠️</span>
      <p>{message}</p>
    </div>
  );
}

export default Message;
