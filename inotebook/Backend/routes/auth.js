const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Aditiisagoodgirl';

// Create a User using => POST: "/api/auth/createuser" . No Login Required
router.post('/createuser', [
    body('name', 'Enter a Valid Name').isLength({ min: 3 }),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Enter a Valid Password').isLength({ min: 5 })
], async (req, res) => {

    // if there are errors, return Bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Corrected the parentheses
    }

    // Check whether the user with this email exits already
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({ error: "Sorry, A User with this Email already exists." })
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //Create a New User
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    })

    const data = {
        user: {
            id: user.id
        }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);
    console.log(authtoken);

    res.json({authtoken});
});

module.exports = router;
