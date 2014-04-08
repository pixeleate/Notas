function addNote() {  
    var addNoteWin = Alloy.createController('notetpl');
    var win = addNoteWin.getView();
    
    if (Alloy.Globals.navgroup){
    	Alloy.Globals.navgroup.openWindow(win); 
    }else if (OS_ANDROID) {
		win.open();
	}
    	
}

