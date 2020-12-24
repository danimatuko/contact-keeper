const express = require("express");
const router = express.Router();

// @ route    GET api/contacts
// @ desc     get all user's contacts
// @ accsess  private
router.post("/", (req, res) => {
	res.send("get all user's contacts");
});

// @ route    POST api/contacts
// @ desc     add a contact
// @ accsess  private
router.post("/", (req, res) => {
	res.send("add a contact");
});

// @ route    PUT api/contacts:id
// @ desc     update a contact
// @ accsess  private
router.put("/:id", (req, res) => {
	res.send("update a contact");
});

// @ route    DELETE api/contacts:id
// @ desc     delete a contact
// @ accsess  private
router.delete("/:id", (req, res) => {
	res.send("delete a contact");
});

module.exports = router;
