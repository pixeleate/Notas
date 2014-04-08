function Controller() {
    function addNote() {
        var addNoteWin = Alloy.createController("notetpl");
        var win = addNoteWin.getView();
        Alloy.Globals.navgroup && Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notas";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.notas = Ti.UI.createWindow({
        title: "Titanium Notes",
        backgroundColor: "#fff",
        id: "notas"
    });
    $.__views.notas && $.addTopLevelView($.__views.notas);
    $.__views.addButton = Ti.UI.createButton({
        id: "addButton",
        systemButton: Titanium.UI.iPhone.SystemButton.ADD
    });
    addNote ? $.__views.addButton.addEventListener("click", addNote) : __defers["$.__views.addButton!click!addNote"] = true;
    $.__views.notas.rightNavButton = $.__views.addButton;
    var __alloyId3 = [];
    $.__views.__alloyId4 = Alloy.createController("row", {
        id: "__alloyId4",
        __parentSymbol: __parentSymbol
    });
    __alloyId3.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.todoTable = Ti.UI.createTableView({
        data: __alloyId3,
        id: "todoTable"
    });
    $.__views.notas.add($.__views.todoTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.addButton!click!addNote"] && $.__views.addButton.addEventListener("click", addNote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;