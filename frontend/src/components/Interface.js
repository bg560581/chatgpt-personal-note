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
import { log } from "console";

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
  const [saveDisabled, setSaveDisabled] = useState(false)
  const [emptyNote, setEmptyNote] = useState('')
  const [submitDisabled, setSubmitDisabled] = useState(false);


  const handleSubmit = (e) => {
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
      e.preventDefault();
      // e.currentTarget.disabled = true;
      setSubmitDisabled(true)
    };
    
    useEffect(() => {}, [note]);
    
    async function handleSave(e) {
      e.preventDefault();
    const noteData = {
      note: noteValue,
    };
    console.log(noteData);
    await fetch("http://localhost:5000/chat/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteData),
    }).then((response) => response.json());
    setNoteValue(noteData.note);
    setSaveDisabled(true)
    console.log(noteData);
    console.log(setSaveDisabled, "disabled...")

  }

  // RESETS CHANGES
  function handleReset() {
    setNoteValue(initialNote);
  }

  function handleRefresh(e) {
    e.preventDefault();
    setSubmitDisabled(false)
    setNoteValue("")
    setAge("");
    setGender("");
    setOccasion("");
    setRelationship("");
    setTone("");
    setName("");
    setSubName("");
  }

  return (
    <div className="body-interface">
      <div></div>
      <div id="create">
        <div className="personal-note">

        <h1>Create your own personal note</h1>
        <hr />
        <p>
          using me you can create a personal note for any Occasion, for anyone,
          of any age, and in any Style
        </p>
        </div>
        <div>
          <textarea
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)}
            className="note-textbox"
          />
          <button type="submit" className="save-btn" disabled={saveDisabled, !noteValue} onClick={handleSave}>
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
                <Age handleChange={setAge} id="age" required/>
              </div>
            </div>

            <div className="form-row">
              <div className="input-data">
                <Gender handleChange={setGender} required/>
              </div>
              <div className="input-data">
                <Relationship handleChange={setRelationship} required/>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <Occasion handleChange={setOccasion} required/>
              </div>
              <div className="input-data">
                <Tone handleChange={setTone} required/>
              </div>
            </div>
            {/* <div>
              <Words
                handleChange={setWordCount}
                id="word count"
                styles={{ marginTop: "60px" }}
              />
            </div> */}
            <div className="form-row">
              <div className="input-data">
                <div className="inner"></div>
                <button type="submit" className="submit-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
              <div className="input-data">
                <div className="inner"></div>
                <button type="reset" className="submit-btn" onClick={handleReset}>
                  Reset Changes
                </button>              
                </div>
              <div className="input-data">
                <div className="inner"></div>
                <button type="refresh" className="refresh-btn" onClick={handleRefresh}>
                  refresh
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
