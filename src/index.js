const express = require("express");
const { routes } = require("./routes");
const { errorHandler } = require("../utils/errorHandler");
const app = express();

app.use(express.json());
app.use("/", routes());
app.use(errorHandler); // This should be the last middleware

module.exports = { app };
