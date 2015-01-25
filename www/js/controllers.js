angular.module('starter.controllers', [])

.controller('CalcCtrl', function($scope) {
	laps = 1
	time = {
		minutes: 2,
		seconds: 2
	};
	goallap = ((time.minutes * 60) + seconds) / laps;
	$scope.laps = laps;
	$scope.time = time;
	$scope.goallap = goallap;
})

.controller('AboutCtrl', function($scope) {});
