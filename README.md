# Inspiration for Application

Have you ever had to write a card for a specific occasion but just completely blanked on what to write? Well, this does that work for you. I got this idea when I was in that exact situation, I was sitting there with a card on my lap without a clue of what to write thinking to myself "if only there was an app to do it for me!"

I introduce to you the ChatGPT-Personal-Note app!!

With this app you can add the recipient's name, your name, the recipient's age, what the occasion is, what gender the recipient is, the relationship between you and the recipient, and the tone you want the note written in. Once all the inputs are plugged in, you will receive an editable note that you can save to your for later use. 

The following is everything you will have to do in order to get the app running correctly on your device.

# NOTE!!!

This app is in the BETA phase and only runs on your localhost. It is the first stage of many and will be and I am working on launching it so it can be used on the web. 

# Getting Started with the application

In order to get the app working correctly, you will need to save it to a folder on your desktop or mac. Once saved, you will need to install the proper dependencies for the app. You will need a database, such as MongoDB, and an OPENAI key to connect to ChatGPT in order to run the app properly. 

you will need to run npm install on both the frontend as well as the backend in order to 
# dependencies
    frontend
        "axios": "^1.4.0",
        "body-parser": "^1.20.2",
        "bootstrap": "^5.3.0",
        "brcypt": "^1.0.1",
        "cors": "^2.8.5",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "express-validator": "^7.0.1",
        "http-status-codes": "^2.2.0",
        "json-web-token": "^3.2.0",
        "jsonwebtoken": "^9.0.0",
        "mongodb": "^5.6.0",
        "mongoose": "^7.3.0",
        "openai": "^3.3.0",
        "react": "^18.2.0",
        "react-cookie": "^4.1.1",
        "react-dom": "^18.2.0",
        "react-modal": "^3.16.1",
        "react-router-dom": "^5.3.4",
        "react-scripts": "^5.0.1",
        "react-toastify": "^9.1.3"


    Backend
        "axios": "^1.4.0",
        "bcrypt": "^5.1.0",
        "bcryptjs": "^2.4.3",
        "body-parser": "^1.20.2",
        "bootstrap": "^5.3.0",
        "cookie-parser": "^1.4.6",
        "cors": "^2.8.5",
        "dotenv": "^16.1.4",
        "express": "^4.18.2",
        "express-validator": "^7.0.1",
        "http-status-codes": "^2.2.0",
        "json-web-token": "^3.2.0",
        "jsonwebtoken": "^9.0.0",
        "mongodb": "^5.6.0",
        "mongoose": "^7.3.0",
        "nodemon": "^2.0.22",
        "openai": "^3.3.0",
        "react": "^18.2.0",

you can install these my using npm install, or npm -i, for bot the frontend and backend.

you will also need a mongoDB database and an Openai API key

store the PORT, the MONGO_URL, the OPENAI_API_KEY, the TOKEN_KEY, and the TOKEN_SECRET in a .env file in your backend. Add this file to a gitignore file so no one sees the token and openai_api_key.

on the frontend the app runs on localhost:3000 and on the backend runs on localhost:5000

I am currently working on the app so it is has not been launched yet.

# current bugs, errors, and unfinished portions I am still working on

I plan on having a delete option from the "past notes" page as well as a refresh button on the "home" page. I am having difficulty with the Login/signup component so I will be fixing that as well. 

Additions to the app I am working on include:
    -a delete function from the "past notes" page. 
    -a refresh button that will generate a new note.
    -I need to add a loading wheel once the submit button has been pressed
    -The submit button needs to be disabled until the text is shown or the form is filled out.
    -The CSS in the app needs some tweeking.
        -> I am working on the proper color palette for app
        -> I also want to add some animation to make the selection process smoother. 


other functions I want to include within the app are:
    
    -The ability to produce multiple notes at one time, if needed
    -Have the option to select a short note or a long one.
    -If you dont like the options provided to select from, you can choose other and type in your own option from the different categories. These options will then be added to your selection until you decide to delete them from that category

Bugs that I am working on include:
    -when you refresh the page, you are brought back to the login screen
    -the Sign Up button doesnt work so I am fixing that
    -there is a reset button that resets the note back to its original text. you can only reset it once but I want to have it so you can reset it multiple times. or disable the button after it has been pressed.
    - the form is still filled out, however, if you press submit again you will get an error saying "there is no data to create a note." 
        -> I want to have the form emptied once submitted or still filled out so you can submit it again
        -> this is a bug as well as an addition I want to add to the app

# Conclusion
Right now, this app is in the construction phase and can only run on your localhost. It has some kinks that need to be ironed out and a few additions to it but I plan on working and editing to make it into a real app that can be used on the internet. This is also the first stage of a three part fully designed app that will include two other parts. Those parts are yet to come so stay tuned for what this application will turn into!!