const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    key: { type: String },
    value: { type: String },
    createdAt: { type: Date },
    counts: [{ type: Number }]
});

const Record = mongoose.model("record" , recordSchema);

module.exports = Record;