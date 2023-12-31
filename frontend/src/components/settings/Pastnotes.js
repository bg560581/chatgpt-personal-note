import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Delete from '../Delete';
import Interface from '../Interface';

function Pastnotes() {
 
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
 
    useEffect(( ) => {
        axios
            .get('http://localhost:5000/chat/')
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
    <div className='container-past'>
        <h1>Past Notes</h1>
        <p>
            {notes.map((note) => (
                <div key={note._id}>
                <hr />{note.content}
                {/* <button onClick={() => handleDelete(note._id)}>Delete</button> */}

                {/* <Delete note={note}/> */}
                </div>
        ))}
        </p>
    </div>
  )
}

export default Pastnotes