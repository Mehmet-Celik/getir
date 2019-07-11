const mongoose = require("mongoose");
mongoose.connect("mongodb://dbUser:dbPassword1@ds249623.mlab.com:49623/getir-case-study", {useNewUrlParser: true });

const db = mongoose.connection;

module.exports = { connection: db, mongoose };