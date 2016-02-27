angular.module('Hansaton')

.controller('ListeningController', function ($scope, $stateParams, LISTENING_SITUATIONS, LISTENING_AUDIO_TYPES, find) {
	$scope.situations = LISTENING_SITUATIONS;
	$scope.audioTypes = LISTENING_AUDIO_TYPES;
	$scope.moreInfoExpanded = false;
	$scope.situation = find($scope.situations, 'state', $stateParams.situation);
	$scope.title = $scope.situation.title;
	$scope.audioElement = document.getElementById('listeningAudioPlayer');
	$scope.audioElementSource = document.getElementById('listeningAudioPlayerSource');
	$scope.navItems = [];

	for (var i = 0; i < $scope.situations.length; i++) {
		var situation = $scope.situations[i];

		$scope.navItems.push({
			state: 'listening',
			stateParams: { situation: situation.state },
			imageActive: situation.navImageActive,
			imageInactive: situation.navImageInactive
		});
	}

	$scope.playAudio = function (type) {
		$scope.audioPlaying = type;
		$scope.audioElement.onError = function (err) { console.error(err); };
		var startTime = $scope.audioElement.currentTime || 0;
		$scope.audioElement.src = $scope.situation.audioFolder + type.file;

		$scope.audioElement.play();
		$scope.audioElement.pause();

		$scope.audioElement.onloadedmetadata = function() {
			setTimeout(function() {
				$scope.audioElement.currentTime = startTime;
			}, 200);
		};

		$scope.audioElement.play();
	};

	$scope.toggleAudio = function () {
		if ($scope.audioPlaying) {
			$scope.audioPlaying = null;
			$scope.audioElement.pause();
			$scope.audioElement.currentTime = 0;
		} else {
			$scope.playAudio($scope.audioTypes[0]);
		}
	};
});


