require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors());

const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';


// Set up the ChatGPT endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(apiUrl, {
        prompt:message,
        max_tokens: 50,
        temperature: 0.6,
        n: 1
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        }
    });
    const botReply = response.data.choices[0].text.trim();
    res.send({ reply: botReply });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred' })
  }
});

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
