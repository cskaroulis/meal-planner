const express = require("express");
const uuid = require("uuid");
let users = require("users-data");

const router = express.Router();

//create user

router.post("/", (req, res) => {
  //validate required prioperties
  if (!req.body.username || !req.body.password) {
    return res.sendStatus(400);
  }

  const newUser = {
    id: uuid.v4(),
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  };

  users.push(newUser);
  res.json(newUser);
});
