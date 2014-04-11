
var moment = require("alloy/moment"); 

function BorrarHint(){
	$.textNote.value = '';
	if(OS_IOS){
		$.textNote.height = $.textNote.height - 216;
	}
}

function saveNote() {
    var notasdata = Alloy.Collections.notesdata;

    // Create a new model for the notes collection
    var nota = Alloy.createModel('Notesdata', {
        date : moment().format("DD/MM/YYYY"),
        title: $.textNote.value.substring(0,50) ,
        content : $.textNote.value
    });

    // add new model to the global collection
    notasdata.add(nota);

    // save the model to persistent storage
    nota.save();

    // reload the notes
    notasdata.fetch();

    closeWindow();
}

function closeWindow() {
	$.notetpl.close();
}