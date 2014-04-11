function Controller() {
    function __alloyId5() {
        $.__views.notas.removeEventListener("open", __alloyId5);
        if ($.__views.notas.activity) $.__views.notas.activity.onCreateOptionsMenu = function(e) {
            var __alloyId2 = {
                title: "Note Search",
                actionView: "searchBar",
                icon: Ti.Android.R.drawable.ic_menu_search,
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW,
                id: "__alloyId1"
            };
            $.__views.__alloyId1 = e.menu.add(_.pick(__alloyId2, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId1.applyProperties(_.omit(__alloyId2, Alloy.Android.menuItemCreateArgs));
            var __alloyId4 = {
                title: "addNote",
                icon: Ti.Android.R.drawable.ic_input_add,
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "__alloyId3"
            };
            $.__views.__alloyId3 = e.menu.add(_.pick(__alloyId4, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId3.applyProperties(_.omit(__alloyId4, Alloy.Android.menuItemCreateArgs));
            addNote ? $.__views.__alloyId3.addEventListener("click", addNote) : __defers["$.__views.__alloyId3!click!addNote"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId12(e) {
        if (e && e.fromAdapter) return;
        __alloyId12.opts || {};
        var models = __alloyId11.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId10 = Alloy.createController("row", {
                $model: __alloyId8,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId10.getViewEx({
                recurse: true
            }));
        }
        $.__views.notesTable.setData(rows);
    }
    function addNote() {
        var addNoteWin = Alloy.createController("notetpl");
        var win = addNoteWin.getView();
        Alloy.Globals.navgroup ? Alloy.Globals.navgroup.openWindow(win) : win.open();
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
    $.__views.notas.addEventListener("open", __alloyId5);
    $.__views.notesTable = Ti.UI.createTableView({
        id: "notesTable",
        filterAttribute: "my_filter"
    });
    $.__views.notas.add($.__views.notesTable);
    var __alloyId11 = Alloy.Collections["notesdata"] || notesdata;
    __alloyId11.on("fetch destroy change add remove reset", __alloyId12);
    exports.destroy = function() {
        __alloyId11.off("fetch destroy change add remove reset", __alloyId12);
    };
    _.extend($, $.__views);
    var notas = Alloy.Collections.notesdata;
    notas && notas.fetch();
    $.notesTable.search = Alloy.createController("searchView").getView();
    $.notesTable.searchAsChild = false;
    $.notas.open();
    __defers["$.__views.__alloyId3!click!addNote"] && $.__views.__alloyId3.addEventListener("click", addNote);
    __defers["$.__views.addButton!click!addNote"] && $.__views.addButton.addEventListener("click", addNote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;