function Controller() {
    function addNotes() {
        var settingsController = Alloy.createController("noteTpl");
        var win = settingsController.getView();
        Alloy.Globals.navgroup && Alloy.Globals.navgroup.openWindow(win);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.notas = Ti.UI.createWindow({
        title: "NotasTitanium",
        backgroundColor: "#fff",
        id: "notas"
    });
    $.__views.notas && $.addTopLevelView($.__views.notas);
    $.__views.settingsButton = Ti.UI.createButton({
        id: "settingsButton",
        systemButton: Titanium.UI.iPhone.SystemButton.ADD
    });
    addNotes ? $.__views.settingsButton.addEventListener("click", addNotes) : __defers["$.__views.settingsButton!click!addNotes"] = true;
    $.__views.notas.rightNavButton = $.__views.settingsButton;
    $.__views.billAmtTextField = Ti.UI.createTextField({
        id: "billAmtTextField",
        top: "40",
        width: "146",
        height: "35",
        textAlign: "right",
        hintText: "Bill amount",
        keyboardType: Ti.UI.KEYBOARD_DECIMAL_PAD,
        returnKeyType: Ti.UI.RETURNKEY_DONE
    });
    $.__views.notas.add($.__views.billAmtTextField);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: "170",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.notas.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "Tip Amount:",
        left: "13",
        width: "124",
        top: "0",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.tipAmtLabel = Ti.UI.createLabel({
        text: "$0.00",
        id: "tipAmtLabel",
        left: "130",
        top: "0",
        width: "80",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
    });
    $.__views.__alloyId3.add($.__views.tipAmtLabel);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Total Amount:",
        left: "13",
        width: "124",
        top: "30",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.totalAmtLabel = Ti.UI.createLabel({
        text: "$0.00",
        id: "totalAmtLabel",
        left: "130",
        top: "30",
        width: "80",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT
    });
    $.__views.__alloyId3.add($.__views.totalAmtLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.settingsButton!click!addNotes"] && $.__views.settingsButton.addEventListener("click", addNotes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;