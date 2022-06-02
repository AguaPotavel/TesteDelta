require("dotenv").config();

// Patches
const { inject, errorHandler } = require("express-custom-error");
// const { networkInterfaces } = require('os');
var ip = require("ip");
// console.log(ip.address());
inject(); // Patch express in order to use async / await syntax

// Require Dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("./util/logger");
var fs = require("fs");
var path = require("path");

// Load .env Enviroment Variables to process.env

// Connect to MongoDB
const { PORT } = process.env;

// Instantiate an Express Application
const app = express();

// Configure Express App Instance
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.multipart());
app.use(bodyParser.json());

// Configure custom logger middleware
app.use(logger.dev, logger.combined);

app.use(cookieParser());
app.use(cors());
app.use(helmet());

// get current ip address

// Assign Routes
require("./routes/router")(app);

// Assign Static folder
app.use("/static/images", express.static(path.join(__dirname + "/static/images")));

// // Handle errors
app.use(errorHandler());

// Handle not valid route
app.use("*", (req, res) => {
  res.status(404).json({ status: false, message: "Endpoint Not Found" });
});

// Open Server on selected Port
app.listen(PORT, () => {
    console.log(`Server is running on :${ ip.address()}:${PORT}`);
});
