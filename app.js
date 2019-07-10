const express = require("express");
const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PATH;

app.get("/", (req, res) => {
    res.json({ "code": 0, "msg": "Success", "records": [{ "key": "TAKwGc6Jr4i8Z487", "createdAt": "2017-01-28T01:22:14.398Z", "totalCount": 2800 }, { "key": "NAeQ8eX7e5TEg7oH", "createdAt": "2017-01-27T08:19:14.135Z", "totalCount": 2900 }] }
    );
});

app.listen(port, () => console.log("seni dinliyorum albayım"));