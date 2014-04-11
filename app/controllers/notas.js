

var notas = Alloy.Collections.notesdata;

// fetch existing todo items from storage
notas && notas.fetch();

if (OS_ANDROID) {
      // use action bar search view
    $.notesTable.search = Alloy.createController("searchview").getView();
    $.notesTable.searchAsChild = false;
                
}

if(OS_IOS) {
	
	 // use a search bar, compatible with IOS
	$.notesTable.search = Alloy.createController("searchbar").getView();
	
	//Set features to delete and move rows
	//dataCollection="notesdata" search="searchBar" filterAttribute="my_filter" filterCaseInsensitive="true"
	$.notesTable.search = $.searchBar;
	$.notesTable.filterAttribute = 'my_filter';
	$.notesTable.filterCaseInsensitive = 'true';
	$.notesTable.editable = true;
	$.notesTable.moveable = true;
    
    var counter = 0;

var EditButton = Titanium.UI.createButton({
		title:'Edit'

});

$.EditButton.addEventListener('click', function(){
	if (counter == 0) {
		
		$.EditButton.title ="Cancel";
		$.notesTable.editing = true;
		
		counter++;
	} else {
		
		$.EditButton.title ="Edit";
		$.notesTable.editing = false;
		
		counter--;
	}
	
});
     
    
}

$.notas.open();



	// Function to show the window where we add the new notes 
function addNote() {  
    var addNoteWin = Alloy.createController('notetpl');
    var win = addNoteWin.getView();
    
    // if platform is IOS or Android
    if (Alloy.Globals.navgroup){
    	Alloy.Globals.navgroup.openWindow(win); 
    }else if (OS_ANDROID) {
		win.open();
	}
    	
}

