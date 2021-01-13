const { User, validateRegister, validateLogin } = require("../models/User");
const config = require("config");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	// validate userSchema
	try {
		await validateRegister(req.body);
	} catch (e) {
		return res.status(400).json({ error: e.errors });
	}

	const { name, email, password } = req.body;

	try {
		let user = await User.findOne({ email: email });
		if (user) return res.status(400).json({ msg: ["user already exist"] });

		user = new User({
			name: name,
			email: email,
			password: password
		});
		// hash password before saving in DB
		const salt = await bycrypt.genSalt(10);
		user.password = await bycrypt.hash(password, salt);
		await user.save();

		// create and return a JWT
		payload = {
			user: {
				id: user.id
			}
		};
		const token = jwt.sign(payload, config.get("jwtSecret"));
		res.json({ token: token });
	} catch (e) {
		console.log(e.message);
		res.status(500).send("server error");
	}
};

const loginUser = async (req, res) => {
	// validate userSchema
	try {
		await validateLogin(req.body);
	} catch (e) {
		return res.status(400).json(e.errors);
	}

	const { email, password } = req.body;

	try {
		let user = await User.findOne({ email: email });
		if (!user) return res.status(400).json({ msg: "wrong creaditails" });
		const isMatch = await bycrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: "wrong creaditails" });

		// create and send a JWT
		payload = {
			user: {
				id: user.id
			}
		};

		const token = jwt.sign(payload, config.get("jwtSecret"));
		res.status(200).json({ token: token });
	} catch (e) {
		console.log(e.message);
		res.status(500).send("server error");
	}
};

const getLoggedInUser = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.status(200).json(user);
	} catch (e) {
		res.status(500).json({ msg: "server errror" });
	}
};

module.exports = {
	registerUser,
	loginUser,
	getLoggedInUser
};
