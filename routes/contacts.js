const express = require("express");
const {
	addContact,
	getContacts
} = require("../controllers/contactsController");
const auth = require("../middlewares/auth");
const router = express.Router();

// @ route    GET api/contacts
// @ desc     get all user's contacts
// @ accsess  private
router.get("/", auth, getContacts);

// @ route    POST api/contacts
// @ desc     add a contact
// @ accsess  private
router.post("/", auth, addContact);

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
