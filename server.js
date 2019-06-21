const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3400;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const logger = require("morgan");

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// adding routes
app.use(routes);

// request to the React app
// define any API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test", 
{ useNewUrlParser: true });

// start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});