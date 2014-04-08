function Controller() {
    function __alloyId4() {
        $.__views.notas.removeEventListener("open", __alloyId4);
        if ($.__views.notas.activity) $.__views.notas.activity.onCreateOptionsMenu = function(e) {
            var __alloyId3 = {
                title: "addNote",
                icon: Ti.Android.R.drawable.ic_input_add,
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM,
                id: "__alloyId2"
            };
            $.__views.__alloyId2 = e.menu.add(_.pick(__alloyId3, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId2.applyProperties(_.omit(__alloyId3, Alloy.Android.menuItemCreateArgs));
            addNote ? $.__views.__alloyId2.addEventListener("click", addNote) : __defers["$.__views.__alloyId2!click!addNote"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
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
        title: "Titanium Notes",
        backgroundColor: "#fff",
        id: "notas"
    });
    $.__views.notas && $.addTopLevelView($.__views.notas);
    $.__views.notas.addEventListener("open", __alloyId4);
    var __alloyId6 = [];
    $.__views.__alloyId7 = Alloy.createController("row", {
        id: "__alloyId7",
        __parentSymbol: __parentSymbol
    });
    __alloyId6.push($.__views.__alloyId7.getViewEx({
        recurse: true
    }));
    $.__views.todoTable = Ti.UI.createTableView({
        data: __alloyId6,
        id: "todoTable"
    });
    $.__views.notas.add($.__views.todoTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId2!click!addNote"] && $.__views.__alloyId2.addEventListener("click", addNote);
    __defers["$.__views.addButton!click!addNote"] && $.__views.addButton.addEventListener("click", addNote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;