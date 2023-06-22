const express = require("express");
const { Router } = require("express");
const router = Router();
const User = require('../models/users')

router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { email:req.body.email}
    })

    if (!user || !await bcrypt.compare(req.body.password)) {
        res.status(404).json({
            message: 'Could not find a user with the provided username and password'
        })
    } else {
        res.json({ user })
    }
    console.log(user)
})



module.exports = router