exports.definition = {
    config: {
        columns: {
            date: "text",
            title: "text",
            content: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "notesdata"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("notesdata", exports.definition, []);

collection = Alloy.C("notesdata", exports.definition, model);

exports.Model = model;

exports.Collection = collection;