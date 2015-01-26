angular.module('starter.controllers', [])

.controller('CalcCtrl', function($scope) {
	laps = 1;
	goalTime = {
		_minutes: 2,
		minutes: function(newMinutes){
			if (angular.isDefined(newMinutes)){
				this._minutes = parseInt(newMinutes);
			}

			return this._minutes;
		},
		_seconds: 2,
		seconds: function(newSeconds){
			if(angular.isDefined(newSeconds)){
				this._seconds = parseInt(newSeconds);
			}

			return this._seconds;
		}
	};

	$scope.laps = laps;
	$scope.goalTime = goalTime;
	
	$scope.goalLap = function(m, s, l){
	 	goalLapInSeconds = ((m*60) + s) / l;
	 	if(goalLapInSeconds >= 60){
	 		goalMins = Math.floor((((goalLapInSeconds % 31536000) % 86400) % 3600) / 60)
	 	 	return goalMins + " minutes " + Math.round(goalLapInSeconds - (goalMins * 60)) + " seconds";
	 	}else{
	 		return Math.round(goalLapInSeconds) + " seconds"
	 	}
	};
	$scope.incSeconds = function(){ $scope.goalTime.seconds($scope.goalTime.seconds() + 1); };
	$scope.incMinutes = function(){ $scope.goalTime.minutes($scope.goalTime.minutes() + 1); };
	$scope.decSeconds = function(){ if($scope.goalTime.seconds() >= 1){ $scope.goalTime.seconds($scope.goalTime.seconds() - 1) } };
	$scope.decMinutes = function(){ if($scope.goalTime.minutes() >= 1){ $scope.goalTime.minutes($scope.goalTime.minutes() - 1) } };

	$scope.pad = function(number){
		if(number<10){
			return "0" + number;
		}else{
			return number;
		}
	}
})

.controller('AboutCtrl', function($scope) {});
