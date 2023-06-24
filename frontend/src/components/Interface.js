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

function Interface() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [relationship, setRelationship] = useState("");
  const [tone, setTone] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [subName, setSubName] = useState("");
  // const [submittedPayload, setSubmittedPayload] = useState("");
  // const [show, setShow] = useState(true);

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
    };

    // setSubmittedPayload((prevPayload) => ({ ...prevPayload, ...data }));
    // setSubmittedPayload(data); // Store the submitted payload

    fetch("http://localhost:5000/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dataresponse) => {
        setNote(dataresponse.content);
        // setSubmittedPayload(dataresponse.content); // Store the submitted payload
      });

    setAge("");
    setGender("");
    setOccasion("");
    setRelationship("");
    setTone("");
    setName("");
    setSubName("");
  };

  useEffect(() => {}, [note]);
  // useEffect(() => {
  //   if (submittedPayload) {
  //     handleSubmit();
  //   }
  // }, [submittedPayload]);

  function handleReset() {
    window.location.reload(true);
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
        <div id="yourNote">{note}</div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-data">
              <SubName handleChange={setSubName} required />
              <div className="underline"></div>
              </div>
              <div>
                <Age handleChange={setAge} id="age" />
              </div>
            </div>
            <div>
              <Gender handleChange={setGender} />
            </div>
            <div>
              <Occasion handleChange={setOccasion} />
            </div>
            <div>
              <Relationship handleChange={setRelationship} />
            </div>
            <div>
              <Tone handleChange={setTone} />
            </div>
            <div>
              <Name
                handleChange={setName}
                id="name"
                styles={{ marginTop: "60px" }}
              />
            </div>
            <div>
              <button type="submit" id="interfaceSubmit">
                Submit
              </button>
              <button type="reset" id="interfaceReset" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Interface;
