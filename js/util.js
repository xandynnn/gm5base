var Util = {
	setCookie: function (nome, valor, dias) {
		if (!dias) {
			dias = 0;
		}
		if (dias) {
			var date = new Date();
			date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		} else var expires = "";
		document.cookie = nome + "=" + valor + expires + "; path=/";
	},
	getCookie: function (cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	},
	strTruncate: function (str, limite, fim) {
		var qtd = limite || 50;
		var fim = fim || "...";
		str = jQuery.trim(str);
		if (str.length < qtd) {
			return str;
		}
		return str.substr(0, qtd) + fim;
	},
	isMobile: function () {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	},
	isPortrait: function () {
		return (window.innerHeight > window.innerWidth);
	},
	isLandscape: function () {
		return (window.orientation === 90 || window.orientation === -90);
	},
	getUrlParam: function (param, url) {
		param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regexS = "[\\?&]" + param + "=([^&#]*)";
		var regex = new RegExp(regexS);

		//se url não for informada, assume a url corrente da página
		if (typeof url == "undefined")
			var results = regex.exec(window.location.href);
		else
			var results = regex.exec(url);

		if (results == null) {
			return "";
		} else {
			return decodeURI(results[1]);
		}
	}
};
