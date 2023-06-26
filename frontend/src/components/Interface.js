import React, { useState, useEffect } from "react";

// INPUTS
import Age from "./settings/Age";
import Gender from "./settings/Gender";
import Occasion from "./settings/Occasion";
import Relationship from "./settings/Relationship";
import SubName from "./settings/SubName";
import Name from "./settings/Name";
import Tone from "./Tone";
import "../styles/styles.css";
import Words from "./settings/Words";
import Navigation from "./Navigation";

function Interface() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [relationship, setRelationship] = useState("");
  const [tone, setTone] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [subName, setSubName] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [initialNote, setInitialNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      age: age,
      gender: gender,
      occasion: occasion,
      relationship: relationship,
      tone: tone,
      name: name,
      subName: subName,
      wordCount: wordCount,
    };

    fetch("http://localhost:5000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dataresponse) => {
        const aLovelyNote = dataresponse.content;
        setNote(aLovelyNote);
        setNoteValue(dataresponse.content);
        setInitialNote(aLovelyNote);
      });

    setAge("");
    setGender("");
    setOccasion("");
    setRelationship("");
    setTone("");
    setName("");
    setSubName("");
    setWordCount("");
  };

  useEffect(() => {}, [note]);

  async function handleSave(e) {
    e.preventDefault();
    const noteData = {
      note: noteValue,
    };
    console.log(noteData);
    await fetch("http://localhost:5000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    }).then((response) => response.json());
    setNoteValue(noteData);
    // .then(noteData => {
    console.log(noteData);
    //   // Handle the response from the server if needed
    // })
    // .catch(error => {
    //   // Handle any errors that occur during the request
    //   console.error(error);
    // });
  }

  // RESETS CHANGES
  function handleReset() {
    setNoteValue(initialNote);
    console.log(initialNote);
  }

  // function handleGenerate() {
  //   if (submittedPayload) {
  //     // Re-submit the previous payload
  //     fetch("http://localhost:5000/chat/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(submittedPayload),
  //     })
  //       .then((response) => response.json())
  //       .then((dataresponse) => {
  //         setNote(dataresponse.content);
  //         setSubmittedPayload(dataresponse.content)
  //       });
  //   }
  //   // setShow(!show)

  // }

  return (
    <div>
      <div></div>
      <div id="create">
        <h1>Create your own personal note</h1>
        <p>
          using me you can create a personal note for any Occasion, for anyone,
          of any age, and in any Style
        </p>
        <div>
          <textarea
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)}
            className="note-textbox"
          />
          <button type="submit" onClick={handleSave}>
            save
          </button>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-data">
                <SubName handleChange={setSubName} required />
              </div>
              <div className="input-data">
                <Name handleChange={setName} id="name" required />
              </div>
              <div className="input-data">
                <Age handleChange={setAge} id="age" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <Gender handleChange={setGender} />
              </div>
              <div className="input-data">
                <Relationship handleChange={setRelationship} />
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <Occasion handleChange={setOccasion} />
              </div>
              <div className="input-data">
                <Tone handleChange={setTone} />
              </div>
            </div>
            {/* <div>
              <Words
                handleChange={setWordCount}
                id="word count"
                styles={{ marginTop: "60px" }}
              />
            </div> */}
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <button type="submit" id="interfaceSubmit">
                  Submit
                </button>
              </div>
              <div className="input-data">
                <div className="inner"></div>
                <button type="reset" id="interfaceReset" onClick={handleReset}>
                  Reset Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Interface;
