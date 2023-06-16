const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongoose connected", process.env.MONGO_URI))


// SCHEMA
const noteSchema = new mongoose.Schema({
    // messages: {
    //     role: String,
    //     content: String,
    //     required: true
    // },
    role: {
        type: String,
        required : true
    }, 
    content: {
        type: String,
        required: true
    }
});

const Note = mongoose.model("Notebase", noteSchema);
module.exports = Note