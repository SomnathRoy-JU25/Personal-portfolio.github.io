const express = require("express");
const app = express();
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 4000;

dotenv.config();

// Connecting to database
database.connect();
 
// Middlewares
app.use(express.json());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);

// Setting up routes
app.use("/api/v1/reach", contactUsRoute);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
