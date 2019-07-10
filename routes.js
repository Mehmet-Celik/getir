const express = require("express");
const recordModel = require("./model/record");
const isValid = require("./library/validateHande");
const router = express.Router();

router.post("/record", async(req, res) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    try {
        isValid(req.body, ["startDate", "endDate", "minCount", "maxCount"]);

        const records = await recordModel
        .aggregate([
            {
                $project: {
                    key: 1,
                    createdAt: 1,
                    totalCount: { $sum: "$counts" }
                }
            },
            {
                $match: {
                    createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
                    totalCount: { $gt: minCount, $lt: maxCount },
                }
            }
        ]);

        res.json(({ code: 0, msg: "success", records }));
    } catch (error) {
        res.json(({ code: 1, msg: error, records: [] }));
    }
});

module.exports = router;