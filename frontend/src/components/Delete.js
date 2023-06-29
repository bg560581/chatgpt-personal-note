import React, { useEffect, useState} from 'react'
import axios from 'axios'
import "../styles/styles.css"


function Delete({ id }) {
  const [note, setNote] = useState(null)
    
  const deleteNote = () => {
  
        axios.delete(`http://localhost:5000/chat/${id}`)
        .then(() => setNote('delete successful!'));
      }
  return (
    <div>
      <form>
      <button 
            type='text' 
            placeholder='edit'
            onClick={() => deleteNote(id)}
            style={{
              // width: "25%",
              // height:'15px',
              marginLeft: "auto",
              marginRight: "auto",
              marginTop:'7px',
              display: "block",
              fontSize:'14px'
            }}
          >
            Delete
          </button>
      </form>
    </div>
  )
}


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/signup/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputValue),
//         credentials: "include",
//       });
//       const data = await response.json();
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
  
//     setInputValue({
//       email: "",
//       password: "",
//       username: "",
//     });
//   };


export default Delete;
