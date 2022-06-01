// Patches
const { inject, errorHandler } = require("express-custom-error");
inject(); // Patch express in order to use async / await syntax

// Require Dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./util/logger");
var fs = require("fs");
var path = require("path");
// var upload = require("./storage/multer");
const connection = require("./database/index");

// Load .env Enviroment Variables to process.env
require("mandatoryenv").load(["DB_URL", "PORT", "SECRET"]);

// Connect to MongoDB
connection();
const { PORT } = process.env;

// Instantiate an Express Application
const app = express();

// Configure Express App Instance
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure custom logger middleware
app.use(logger.dev, logger.combined);

app.use(cookieParser());
app.use(cors());
app.use(helmet());

// This middleware adds the json header to every response
app.use("*", (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

// Assign Routes
// app.use('/', require('./routes/router.js'));
require("./routes/router")(app);

// // Handle errors
app.use(errorHandler());

// Handle not valid route
app.use("*", (req, res) => {
  res.status(404).json({ status: false, message: "Endpoint Not Found" });
});

// Open Server on selected Port
app.listen(PORT, () => console.info("Server listening on port ", PORT));
