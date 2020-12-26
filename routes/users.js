const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/usersController");

// @ route    POST api/users
// @ desc     Register a user
// @ accsess  public
router.post("/", registerUser);

module.exports = router;
