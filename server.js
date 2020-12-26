const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectToDB = require("./config/db");

const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const contactsRoutes = require("./routes/contacts");

// connect to mongoDB
connectToDB();

app.use(express.json({ extended: false }));

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactsRoutes);

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
