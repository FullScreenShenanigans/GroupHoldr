var groupNames = ["names", "ages"],
    groupTypes = {
        "names": "Array",
        "ages": "String"
    },
    GroupHolder;

describe("constructor", function () {
    it("throws an error if not given settings", function () {
        chai.expect(function () {
            new GroupHoldr();
        }).to.throw("No settings given to GroupHoldr.");
    });

    it("throws an error if not given groupNames", function () {
        chai.expect(function () {
            new GroupHoldr({
                "groupTypes": groupTypes
            });
        }).to.throw("No groupNames given to GroupHoldr.");
    });

    it("throws an error if not given groupTypes", function () {
        chai.expect(function () {
            new GroupHoldr({
                "groupNames": groupNames
            });
        }).to.throw("No groupTypes given to GroupHoldr.");
    });

    it("works", function () {
        GroupHolder = new GroupHoldr({
            "groupNames": groupNames,
            "groupTypes": groupTypes
        });
    });
});