import React, { useState } from 'react';
import axios from 'axios';

function ChatBox() {
  const [message, setMessage] = useState('');
  const [botReply, setBotReply] = useState('');

  const handleChat = async () => {
    try {
      const response = await axios.post('http://localhost:8080/chat', {
        message
      });

      setBotReply(response.data.reply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Chat Bot</h1>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleChat}>Send</button>
      </div>
      <p>{botReply}</p>
    </div>
  );
}

export default ChatBox;