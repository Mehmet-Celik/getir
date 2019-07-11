const assert = require("assert");
const isValid = require("../../library/validateHande");

describe("validateHandle", function() {

    it("should throw error when missing body ", () => {
        try {
            isValid({},["field1", "field2"]);
            assert.ok(false);
        } catch (error) {
            assert.deepEqual(error, { invalidFields: ["field1", "field2"] });
        }
    });

    it("should not throw error when the body has fields ", () => {
        try {
            isValid({field1: true, field2: true }, ["field1", "field2"]);
            assert.ok(true);
        } catch (error) {
            assert.ok(false);
        }
    });
});