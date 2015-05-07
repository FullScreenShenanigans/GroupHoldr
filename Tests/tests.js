var groupNames = ["Name", "Age"],
    groupTypes = {
        "Name": "Array",
        "Age": "Object"
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

describe("basic getting", function () {
    it("gets group names", function () {
        chai.expect(GroupHolder.getGroupNames()).to.be.deep.equal([
            "Name", "Age"
        ]);
    });
    
    it("gets groups", function () {
        chai.expect(GroupHolder.getGroup("Name")).to.be.deep.equal([]);
        chai.expect(GroupHolder.getGroup("Age")).to.be.deep.equal({});
    });
});

describe("adding", function () {
    it("adds values", function () {
        GroupHolder.addName("Josh");
        GroupHolder.functions.add.Name("Brandon");
        GroupHolder.getGroup("Name").push("Mariah");
    });
});