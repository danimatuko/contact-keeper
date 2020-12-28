const mongoose = require("mongoose");
const yup = require("yup");

const contactSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users"
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String
	},
	type: {
		type: String,
		default: "personal"
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Contact = mongoose.model("Contact", contactSchema);

const contactValidationSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup.string(),
	type: yup.string(),
	date: yup.date()
});

const validateContact = (contact) => {
	return contactValidationSchema.validate(contact, { abortEarly: false });
};

module.exports = { Contact, validateContact };
