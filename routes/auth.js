const express = require("express");
const router = express.Router();
const  {loginUser}  = require("../controllers/usersController");

// @ route    GET api/auth
// @ desc     get logged in user
// @ accsess  private
router.post("/", loginUser);

// @ route    POST api/auth
// @ desc     auth a user & get a token
// @ accsess  public

// router.post("/", (req, res) => {
// 	res.send("loggin a user");
// });

module.exports = router;
