const express = require("express");
const {
	addContact,
	getContacts,
	updateContact,
	deleteContact
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

// @ route    PUT api/contacts/:id
// @ desc     update a contact
// @ accsess  private
router.put("/:id", auth, updateContact);

// @ route    DELETE api/contacts:id
// @ desc     delete a contact
// @ accsess  private
router.delete("/:id", auth, deleteContact);

module.exports = router;
