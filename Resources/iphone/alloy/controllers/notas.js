function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Alloy.createController("row", {
                $model: __alloyId3,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId5.getViewEx({
                recurse: true
            }));
        }
        $.__views.notesTable.setData(rows);
    }
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
        id: "notas",
        title: "Titanium Notes",
        backgroundColor: "#fff"
    });
    $.__views.notas && $.addTopLevelView($.__views.notas);
    $.__views.addButton = Ti.UI.createButton({
        id: "addButton",
        systemButton: Titanium.UI.iPhone.SystemButton.ADD
    });
    addNote ? $.__views.addButton.addEventListener("click", addNote) : __defers["$.__views.addButton!click!addNote"] = true;
    $.__views.notas.rightNavButton = $.__views.addButton;
    $.__views.EditButton = Ti.UI.createButton({
        id: "EditButton",
        title: "Edit"
    });
    $.__views.notas.leftNavButton = $.__views.EditButton;
    $.__views.notesTable = Ti.UI.createTableView({
        id: "notesTable",
        filterAttribute: "my_filter"
    });
    $.__views.notas.add($.__views.notesTable);
    var __alloyId6 = Alloy.Collections["notesdata"] || notesdata;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var notas = Alloy.Collections.notesdata;
    notas && notas.fetch();
    $.notesTable.search = $.searchBar;
    $.notesTable.filterAttribute = "my_filter";
    $.notesTable.filterCaseInsensitive = "true";
    $.notesTable.editable = true;
    $.notesTable.moveable = true;
    $.notesTable.search = Alloy.createController("searchbar").getView();
    var counter = 0;
    Titanium.UI.createButton({
        title: "Edit"
    });
    $.EditButton.addEventListener("click", function() {
        if (0 == counter) {
            $.EditButton.title = "Cancel";
            $.notesTable.editing = true;
            counter++;
        } else {
            $.EditButton.title = "Edit";
            $.notesTable.editing = false;
            counter--;
        }
    });
    $.notas.open();
    __defers["$.__views.addButton!click!addNote"] && $.__views.addButton.addEventListener("click", addNote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;