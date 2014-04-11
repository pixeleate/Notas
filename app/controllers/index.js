if (OS_IOS){
	Alloy.Globals.navgroup = $.win1;
}

if (OS_ANDROID) {
	$.notas.getView().open();
} else {
	$.win1.open();
}


