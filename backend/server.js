require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const path = require('path')
const chat = require("./controllers/chat");
const app = express();


// CONNECTION TO DATABASE
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongoose connected", process.env.MONGO_URI));

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static('path'));

// CONTROLLERS AND ROUTES
app.use('/chat', chat)

app.get('/', (req, res) => {
    res.send('home');
});

app.get('*', (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

// LISTEN FOR CONNECTIONS
app.listen(process.env.PORT)
// console.log(`Server listening on port ${PORT}`);