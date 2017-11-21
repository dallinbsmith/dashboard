const express = require("express");
const blytzRoutes = express.Router();
const User = require("../models/user");

blytzRoutes.get("/", (req, res) => {
    User.find((err, userlist) => {
        console.log(userlist);
        if (err) return res.status(500).send(err);
        return res.send(userlist);
    });
});

blytzRoutes.post("/", (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, createdUser) => {
        if (err) return res.status(500).send(err);
        return res.send(createdUser);
    });
});

module.exports = blytzRoutes;
