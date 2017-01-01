(function() {
	'use strict';

	angular
		.module("starter")
		.factory('externalAppsService', externalAppsService);

	externalAppsService.$inject = ['$window'];

	/* @ngInject */
	function externalAppsService($window) {
		var service = {
			openMapsApp: openMapsApp,
			openExternalUrl: openExternalUrl
		};
		return service;

		// ******************************************************

		function openMapsApp(coords) {
			var q;
			if (ionic.Platform.isAndroid()) {
				q = 'geo:' + coords + '?q=' + coords;
			} else {
				q = 'maps://maps.apple.com/?q=' + coords;
			}
			q = q.replace(' ', '');
			$window.location.href = q;
		}

		function openExternalUrl(url) {
			$window.open(url, '_system', 'location=yes');
			return false;
		}
	}
})();
