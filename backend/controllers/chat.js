const express = require("express");
const { Router } = require("express");
const router = Router();
const Note = require('../models/notes.js')
const axios = require('axios')
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration);


// Set up the ChatGPT endpoint
router.post("/", async (req, res) => {
    const age = req.body.age;
    const gender = req.body.gender;
    const occasion = req.body.occasion;
    const relationship = req.body.relationship;
    const tone = req.body.tone
    const yourName = req.body.name
    const theirName = req.body.subName

    const note = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: `write me a note for a ${gender} who is name is ${theirName} at the age of ${age} and is ${relationship} for ${occasion} in a ${tone} manner sent from ${yourName}.`}],
    })
    const myNote = await Note.create(note.data.choices[0].message)
    res.json(myNote) 
    // console.log(note.data.choices[0].message);
});




// router.get('/', async (req, res) => {
//     const notes = await Note.findAll()
//     res.json(notes)
// })

module.exports = router