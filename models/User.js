const mongoose = require("mongoose");
const yup = require("yup");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model("User", userSchema);

const registerSchema = yup.object().shape({
	name: yup.string(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
	date: yup.date()
});

const loginSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required()
});

const validateRegister = (user) => {
	return registerSchema.validate(user, { abortEarly: false });
};

const validateLogin = (user) => {
	return loginSchema.validate(user, { abortEarly: false });
};

module.exports = {
	User,
	validateRegister,
	validateLogin
};
