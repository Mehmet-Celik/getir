const recordModel = require("../model/record");
const isValid = require("../library/validateHande");

const getRecords = async (body) => {
    const { startDate, endDate, minCount, maxCount } = body;
    try {
        isValid(body,["startDate", "endDate", "minCount", "maxCount"]);

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

        return ({ code: 0, msg: "success", records });
    } catch (error) {
        return ({ code: 1, msg: error, records: [] });
    }
};

module.exports = {
    getRecords,
};