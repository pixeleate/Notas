exports.definition = {
    config: {
        columns: {
            id: "integer",
            date: "text",
            title: "text",
            content: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "notas"
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

model = Alloy.M("notas", exports.definition, []);

collection = Alloy.C("notas", exports.definition, model);

exports.Model = model;

exports.Collection = collection;