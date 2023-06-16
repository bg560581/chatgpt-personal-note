import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ChatBox(note) {
  const [message, setMessage] = useState('');
  const [botReply, setBotReply] = useState('');
//   useEffect(() => {
//     axios
//         .get("http://localhost:3000/chat")
//         .then((response) => {
//             console.log(response);
//             setMessage(response.data.message)
//         })
//   })

  const handleChat = async () => {
    try {
      const response = await axios.post('http://localhost:3000/chat', {
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
        <div className='form-section'>
            <textarea
                rows='5'
                className='form-control'
                placeholder='Notable Note created for you!'>
            </textarea>
            <button className='btn'>Create response</button>
        </div>



        <h1>{note.name}</h1>
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