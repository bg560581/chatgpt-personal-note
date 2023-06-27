const express = require("express");
const { Router } = require("express");
const router = Router();
const User = require('../models/users')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post('/', async (req, res) => {
    
    const { username, password } = req.body;
 
    try {
        // Find the user based on the username
        const user = await User.findOne({ username });
        const userPassword = await bcrypt.compare(password, user.password)
        
        if (!user || !userPassword){
            return res.status(404).json({
                message: 'Could not find username or password'
            })
        }
        else {
            const token = jwt.sign({ id: user.userId }, process.env.TOKEN_KEY);
            res.json({ user, token });
        }
      } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });


    // let user = await User.findOne({
    //         username:req.body.username,
    //         password:req.body.password
    // })

    // if (!user || !await bcrypt.compare(req.body.password)) {
    //     res.status(404).json({
    //         message: 'Could not find a user with the provided username and password'
    //     })
    // } else {
    //     const token = jwt.sign({ id: user.userId }, process.env.JWT_SECRET)
    //     // const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
    //     res.json({ user: user, token: token })
    //     // res.json({ user: user, token:result.value })
    // }
    // console.log(user)
// })

// router.get('/profile', async (req,  res) => {
//     try {
//         if (authenticationMethod === 'Brearer') {
//             //Decode the JWT
//             const result = await jwt.decode(process.env.JWT_SECRET, token)
//             //get the logged in user's id from the payload
//             const { id } = result.value
//         }
//         let user = await User.findOne({
//                 username:req.body.username,
//                 password:req.body.password
            
//         })
//         res.json(user)
//     } catch (error) {
//         res.status(500).json({
//           message: 'An error occurred while retrieving the user.'
//         });
//       }
      

// })

router.get('/profile', async (req, res) => {
    try {
        // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authenticationMethod, token] = req.headers.authorization.split(' ')

        // Only handle "Bearer" authorization for now 
        //  (we could add other authorization strategies later):
        if (authenticationMethod == 'Bearer') {

            // Decode the JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            // Get the logged in user's id from the payload
            const { id } = result.value

            // Find the user object using their id:
            let user = await User.findOne({
                where: {
                    userId: id
                }
            })
            res.json(user)
        }
    } catch {
        res.json(null)
    }
})




module.exports = router