/* Javascript document

	*	Base 2
	* 	18/09/2018
	*	Author: GM5

*/

var systemBusy = false;
var Controller = {
	getController: function () {
		var self = this;
		$('*[data-controller]').each(function(){
			var elem = $(this);
			var elemController = elem.data("controller");

			eval('Controller.' + elemController + '();');

		});
	},
	global: function () {

		//
		//	Scripts globais
		//

	},
	home: function(){

		//
		//	Scripts da home
		//

	}
};
jQuery(document).ready(function ($) {
	Controller.global();
	Controller.getController();
});