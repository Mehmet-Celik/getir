const express = require("express");
const { getRecords } = require('./services/recordService');
const router = express.Router();

router.post("/record", async(req, res) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    const response = await getRecords({ startDate, endDate, minCount, maxCount });
    res.json(response);
});

module.exports = router;