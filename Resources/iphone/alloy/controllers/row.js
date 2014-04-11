function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.noteRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        id: "noteRow",
        my_filter: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title")
    });
    $.__views.noteRow && $.addTopLevelView($.__views.noteRow);
    $.__views.date = Ti.UI.createLabel({
        left: "20dp",
        top: "7dp",
        height: Ti.UI.SIZE,
        color: "#E3E1E2",
        font: {
            fontSize: "10dp"
        },
        id: "date",
        text: "undefined" != typeof $model.__transform["date"] ? $model.__transform["date"] : $model.get("date")
    });
    $.__views.noteRow.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        left: "20dp",
        top: "22dp",
        height: Ti.UI.SIZE,
        font: {
            fontSize: "18dp"
        },
        id: "title",
        text: "undefined" != typeof $model.__transform["title"] ? $model.__transform["title"] : $model.get("title")
    });
    $.__views.noteRow.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;