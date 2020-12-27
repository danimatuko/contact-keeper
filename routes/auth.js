const express = require("express");
const router = express.Router();
const {
	loginUser,
	getLoggedInUser
} = require("../controllers/usersController");
const auth = require("../middlewares/auth");

// @ route    GET api/auth
// @ desc     get logged in user
// @ accsess  private
router.get("/", auth, getLoggedInUser);

// @ route    POST api/auth
// @ desc     auth a user & get a token
// @ accsess  public
router.post("/", loginUser);

module.exports = router;
