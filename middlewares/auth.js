const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	// get the token from the header
	const token = req.header("x-auth-token");

	if (!token) {
		return res.status(401).json({ msg: "No token , accsess denied" });
    }
    
	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"));
		req.user = decoded.user;
		next();
	} catch (e) {
		return res.status(401).json({
			msg: "Invalid token , accsess denied"
		});
	}
};
