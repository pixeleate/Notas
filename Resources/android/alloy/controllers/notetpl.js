function Controller() {
    function __alloyId18() {
        $.__views.notetpl.removeEventListener("open", __alloyId18);
        if ($.__views.notetpl.activity) $.__views.notetpl.activity.onCreateOptionsMenu = function(e) {
            var __alloyId17 = {
                title: "Done",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "__alloyId16"
            };
            $.__views.__alloyId16 = e.menu.add(_.pick(__alloyId17, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId16.applyProperties(_.omit(__alloyId17, Alloy.Android.menuItemCreateArgs));
            saveNote ? $.__views.__alloyId16.addEventListener("click", saveNote) : __defers["$.__views.__alloyId16!click!saveNote"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function BorrarHint() {
        $.textNote.value = "";
    }
    function saveNote() {
        var notasdata = Alloy.Collections.notesdata;
        var nota = Alloy.createModel("Notesdata", {
            date: moment().format("DD/MM/YYYY"),
            title: $.textNote.value.substring(0, 50),
            content: $.textNote.value
        });
        notasdata.add(nota);
        nota.save();
        notasdata.fetch();
        closeWindow();
    }
    function closeWindow() {
        $.notetpl.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notetpl";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.notetpl = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Add Note",
        id: "notetpl"
    });
    $.__views.notetpl && $.addTopLevelView($.__views.notetpl);
    $.__views.notetpl.addEventListener("open", __alloyId18);
    $.__views.textNote = Ti.UI.createTextArea({
        editable: true,
        value: "Write a Note",
        hintText: "Write a Note",
        top: 0,
        height: 500,
        width: 320,
        font: {
            fontSize: 20,
            fontFamily: "Arial"
        },
        color: "#888",
        textAlign: "left",
        returnKeyType: "RETURNKEY_DEFAULT",
        suppressReturn: false,
        id: "textNote"
    });
    $.__views.notetpl.add($.__views.textNote);
    BorrarHint ? $.__views.textNote.addEventListener("focus", BorrarHint) : __defers["$.__views.textNote!focus!BorrarHint"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("alloy/moment");
    __defers["$.__views.__alloyId14!click!saveNote"] && $.__views.__alloyId14.addEventListener("click", saveNote);
    __defers["$.__views.__alloyId16!click!saveNote"] && $.__views.__alloyId16.addEventListener("click", saveNote);
    __defers["$.__views.textNote!focus!BorrarHint"] && $.__views.textNote.addEventListener("focus", BorrarHint);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;