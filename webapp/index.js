sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
	], function(Button, MessageToast) {
		"user strict";
		
		new Button({
			text:"Ready...",
			press: function(){
				MessageToast.show("Hello World!");
			}
		}).placeAt("content");
});