const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const db = require('../config/database');
const routes = require("./routes/api");

const app = express();

// test db connection
db.authenticate()
  .then(_ => console.log("database connected......"))
  .catch(err => console.log(`Error: ${err}`));

app.use(cors());

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1", routes);

app.use((req, res, next) => {
  const error = new Error("Sorry, this path doesn't exist 😭");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status,
      message: error.message
    }
  });
});

module.exports = app;
