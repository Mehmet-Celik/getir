const assert = require("assert");
const { connection } = require("../../library/mongoose");
const { getRecords } = require("../../services/recordService");


before((done) => {
    connection.on("error", () => {
        console.error("connection error");
    });
    connection.once("open", () => {
        console.log("connection success");
        done();
    });
});

describe("recordService", function() {
    this.timeout(5000);

    it("should return code: 0 and msg: 'success' when the request has all body", async () => {
        const body = { startDate: "2016-02-02", endDate: "2018-02-02", minCount: 2700, maxCount: 3000 };

        const response = await getRecords(body);
        assert.equal(response.code, 0);
        assert.equal(response.msg, "success");
    });

    it("should return code: 1 and msg: { invalidFields: [ 'maxCount' ] }  when the request has not 'maxCount'", async () => {
        const body = { startDate: "2016-02-02", endDate: "2018-02-02", minCount: 2700 };

        const response = await getRecords(body);
        assert.equal(response.code, 1);
        assert.deepEqual(response.msg, { invalidFields: [ "maxCount" ] });
    });
});