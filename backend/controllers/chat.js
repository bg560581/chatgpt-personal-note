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
    const wordCount = req.body.wordCount

    const note = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: `write me a note for a ${gender} who is name is ${theirName} at the age of ${age} and is ${relationship} for ${occasion} in a ${tone} manner sent from ${yourName} in ${wordCount}.`}],
    })
    res.json(note.data.choices[0].message) 
    // const createdNote = note.data.choices[0].message
    // const myNote = await Note.create(createdNote)
    // res.json(myNote) 
    console.log(note.data.choices[0].message);
});

router.post("/save", async (req, res) => {
    console.log("saving...");
    const myNote = await Note.create({
        content: req.body.note,
        role: "assistant"
    })
    res.json(myNote)
})

router.get('/', async (req, res) => {
    try{
        
        const notes = await Note.find()
        res.json(notes)
    }catch(err) {
        console.log(err)
        res.status(500).json({ error:'server error' })
    }
})

router.delete('/:id', async( req, res ) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      await note.deleteOne();
      res.json({ message: 'Document deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

module.exports = router