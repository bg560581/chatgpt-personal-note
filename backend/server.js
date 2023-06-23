require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require ("cookie-parser");
// const authRoute = require("./routes/authroute");
const chat = require("./controllers/chat")
const { Signup, Login } = require("./controllers/authcontroller");
// const { userVerification } = require("./middleware/authmiddleware")
const authenication = require('./controllers/authentication')

// CONNECTION TO DATABASE
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongoose connected", process.env.MONGO_URI));

// MIDDLEWARE
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// CONTROLLERS AND ROUTES

app.get('/', (req, res) => {
    res.send('home');
});

app.use('/authentication', authenication)
app.use('/chat', chat)
app.use('/signup', Signup);
app.use('/login', Login)
// app.post('/', userVerification)


app.get('*', (req, res) => {
    res.status(404).send("<h1>404 Page</h1>")
})

// LISTEN FOR CONNECTIONS
app.listen(process.env.PORT)
// console.log(`Server listening on port ${PORT}`);