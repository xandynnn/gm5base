/* Javascript document

*	Base Site
* 	11/07/2019
*	Author: GM5

*/

var systemBusy = false;
var Controller = {
	getController: function () {
		$('*[data-controller]').each(function(){
			var elem = $(this);
			var elemController = elem.data("controller");
			if ( typeof eval('Controller.' + elemController) === "function" ){
				eval('Controller.' + elemController + '();');
			}
		});
	},
	global: function () {

	},
	home: function () {

	}
};

$(document).ready(function ($) {
	Controller.global();
	Controller.getController();
});
