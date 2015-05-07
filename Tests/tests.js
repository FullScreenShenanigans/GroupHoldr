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
    it("adds to Arrays", function () {
        GroupHolder.addName("Josh");
        GroupHolder.functions.add.Name("Brandon");
        GroupHolder.getGroup("Name").push("Mariah");

        chai.expect(GroupHolder.getNameGroup()).to.be.deep.equal([
            "Josh", "Brandon", "Mariah"
        ]);
    });

    it("adds to Objects", function () {
        GroupHolder.addAge("Josh", 19);
        GroupHolder.functions.add.Age("Brandon", 20);
        GroupHolder.getGroup("Age").Mariah = 21;

        chai.expect(GroupHolder.getGroups().Age).to.be.deep.equal({
            "Josh": 19,
            "Brandon": 20,
            "Mariah": 21
        });
    });
});