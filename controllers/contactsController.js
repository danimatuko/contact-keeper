const { Contact, validateContact } = require("../models/Contact");
const mongoose = require("mongoose");
const addContact = async (req, res) => {
	const userId = req.user.id;
	const { name, email, phone, type, date } = req.body;

	try {
		await validateContact(req.body);
	} catch (e) {
		return res.status(400).json(e.errors);
	}

	try {
		let contact = await Contact.findOne({
			user: userId,
			email: email
		});
		if (contact)
			return res.status(400).json({
				msg: "contact already exist"
			});

		contact = new Contact({
			user: userId,
			name: name,
			email: email,
			phone: phone,
			type: type,
			date: date
		});

		await contact.save(contact);

		res.status(200).json(contact);
	} catch (e) {
		res.status(200).json({
			msg: "server error",
			error: e.message
		});
	}
};

const getContacts = async (req, res) => {
	const userId = req.user.id;

	try {
		const contacts = await Contact.find({
			user: userId
		});

		return !contacts.length
			? res.status(200).json({
					msg: "You have no contacts yet..."
			  })
			: res.status(200).json(contacts);
	} catch (e) {
		res.status(500).json({
			msg: "server error",
			error: e.message
		});
	}
	res.json(contacts);
};

const updateContact = async (req, res) => {
	const userId = req.user.id;
	const paramsId = mongoose.Types.ObjectId(req.params.id);
	const { name, email, phone, type } = req.body;

	try {
		const contact = await Contact.findOne({
			user: userId
		});

		if (!contact.length)
			return res.status(401).json({
				msg: "Contact not found"
			});

		if (userId !== contact.user.toString())
			return res.status(401).json({
				msg: "Accsess denied"
			});

		let updatedContact = {
			name: name,
			email: email,
			phone: phone,
			type: type
		};

		try {
			updatedContact = await Contact.findByIdAndUpdate(
				paramsId,
				updatedContact,
				{
					new: true
				}
			);

			res.status(200).json(updatedContact);
		} catch (e) {
			res.status(500).json({
				msg: "Failed to update contact",
				error: e.message
			});
		}
	} catch (e) {
		res.status(500).json({
			msg: "server error",
			error: e.message
		});
	}
};

module.exports = {
	addContact,
	getContacts,
	updateContact
};
