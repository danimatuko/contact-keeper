const { Contact, validateContact } = require("../models/Contact");

const addContact = async (req, res) => {
	const userId = req.user.id;
	const { name, email, phone, type, date } = req.body;

	try {
		await validateContact(req.body);
	} catch (e) {
		return res.status(400).json(e.errors);
	}

	try {
		let contact = await Contact.findOne({ user: userId, email: email });
		if (contact) return res.status(400).json({ msg: "contact already exist" });

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
		res.status(200).json({ msg: "server error", error: e.message });
	}
};

const getContacts = async (req, res) => {
	const userId = req.user.id;

	try {
		const contacts = await Contact.find({ user: userId });

		return !contacts.length
			? res.status(200).json({ msg: "You have no contacts yet..." })
			: res.status(200).json(contacts);
	} catch (e) {
		res.status(500).json({ msg: "server error", error: e.message });
	}
	res.json(contacts);
};

module.exports = { addContact, getContacts };
