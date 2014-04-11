function Controller() {
    function BorrarHint() {
        $.textNote.value = "";
        $.textNote.height = $.textNote.height - 216;
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
    $.__views.__alloyId9 = Ti.UI.createButton({
        title: "Done",
        id: "__alloyId9"
    });
    saveNote ? $.__views.__alloyId9.addEventListener("click", saveNote) : __defers["$.__views.__alloyId9!click!saveNote"] = true;
    $.__views.notetpl.rightNavButton = $.__views.__alloyId9;
    $.__views.textNote = Ti.UI.createTextArea({
        editable: true,
        value: "Write a Note",
        hintText: "Nota",
        top: 0,
        height: 500,
        width: 320,
        font: {
            fontSize: 20,
            fontFamily: "Arial"
        },
        color: "#888",
        textAlign: "left",
        borderWidth: 1,
        borderColor: "#bbb",
        returnKeyType: "RETURNKEY_DEFAULT",
        suppressReturn: false,
        id: "textNote"
    });
    $.__views.notetpl.add($.__views.textNote);
    BorrarHint ? $.__views.textNote.addEventListener("focus", BorrarHint) : __defers["$.__views.textNote!focus!BorrarHint"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    __defers["$.__views.__alloyId9!click!saveNote"] && $.__views.__alloyId9.addEventListener("click", saveNote);
    __defers["$.__views.textNote!focus!BorrarHint"] && $.__views.textNote.addEventListener("focus", BorrarHint);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;