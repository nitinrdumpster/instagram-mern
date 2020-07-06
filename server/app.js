// Requiring dependencies
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URL } = require("./keys");
require("./models/User");
require("./models/Post");

// Connecting to MongoDB
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Error: ", err);
});

// Express setup
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

// Listening on server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
