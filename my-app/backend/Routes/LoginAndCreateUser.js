require('dotenv').config();

const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.JWT_SECRET;


router.post("/createuser",
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "invalid password").isLength({ min: 6 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);


        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location
            })

            res.json({ success: true });

        } catch (error) {
            console.log(err);
            res.json({ success: false });
        }


    })



router.post("/loginuser", body('email').isEmail(), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({ errors: "email does not exist..." });

        }


        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);

        if (!pwdCompare) {
            return res.status(400).json({ errors: "invalid password..." });

        }

        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        return res.json({ success: true, authToken: authToken });


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }


})

module.exports = router;