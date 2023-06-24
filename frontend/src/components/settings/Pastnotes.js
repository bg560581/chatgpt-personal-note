import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Interface from '../Interface';

function Pastnotes() {
 
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        axios
            .get('http://localhost:5000/chat')
            .then((response) => {
    //             console.log(response);
                setNotes(response.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

   
    return (
    <div>
        <h1>Past Notes</h1>
        {notes.map((note) => (
            <div key={note._id}>
                <hr />{note.content}</div>
        ))}
    </div>
  )
}

export default Pastnotes