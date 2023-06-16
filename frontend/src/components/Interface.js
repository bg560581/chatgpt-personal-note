import React, { useState } from "react";

// INPUTS
import Age from "./Age";
import Gender from "./Gender";
import Occasion from "./Occasion";
import Relationship from "./Relationship";
import Style from "./Style";
import Tone from "./Tone";
import ChatBox from "./ChatBox";
import axios from "axios";

function Interface() {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [occasion, setOccasion] = useState('');
    const [relationship, setRelationship] = useState('');
    const [tone, setTone] = useState('');
//   const getAge = (data) => {
//     // console.log(data);
    
// };
//   const getRelationship = (data) => {
//     // console.log(data);
//   };
//   const getGender = (data) => {
//     // console.log(data);
//   };
//   const getOccasion = (data) => {
//     // console.log(data);
//   };
//   const getTone = (data) => {
//     // console.log(data);
//   };
  const handleSubmit = (e) => {
    e.preventDefault();
    // getAge();
    // getGender();
    // getOccasion();
    // getRelationship();
    // getTone();
    console.log("for submitted");
        // Create a data object with the form values
        const data = {
          age: age,
          gender: gender,
          occasion: occasion,
          relationship: relationship,
          tone: tone
        };
    
        // Perform any additional validation if needed
    
        // Post the form data to the server
        fetch('http://localhost:3000/chat/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        const [note, setNote] = useState([]);
        useEffect(() => {
        axios
          .get("http://localhost:3003/photos")
          .then((response) => {
            console.log(response);
            setNote(response.data.note);
            console.log(response.data.note);
          })
          .catch((error) => {
            console.log(error);
          });
      }, [])
        .then(result => {
          // Handle the response from the server if needed
          console.log(result);
        })
        .catch(error => {
          // Handle any errors during the POST request
          console.error('Error:', error);
        });
    
        // Reset the form
        setAge('');
        setGender('');
        setOccasion('');
        setRelationship('');
        setTone('');
      
    };
  return (
    <div>
      <div>
        <h1>Create your own personal note</h1>
          using me you can create a personal note for any Occasion, for anyone,
          of any age, and in ay Style
          {notes.map(note) => {
            return (
      <form onSubmit={handleSubmit}>
        <Age handleChange={setAge} />
        <Gender handleChange={setGender} />
        <Occasion handleChange={setOccasion} />
        <Relationship handleChange={setRelationship} />
        <Tone handleChange={setTone} />
        {/* <Style/> */}
        <button type="submit">Submit</button>
      </form>
          )}}

        {/* <ChatBox/> */}
      <form onSubmit={handleSubmit}>
        <Age handleChange={setAge} />
        <Gender handleChange={setGender} />
        <Occasion handleChange={setOccasion} />
        <Relationship handleChange={setRelationship} />
        <Tone handleChange={setTone} />
        {/* <Style/> */}
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Interface;
