angular.module('Hansaton')

.controller('InfoController', function ($scope, $stateParams, INFO_TOPICS, find) {
	$scope.topics = INFO_TOPICS;
	$scope.topic = find($scope.topics, 'state', $stateParams.topic);
	$scope.title = $scope.topic.title;
	$scope.navItems = [];
	$scope.currentItem = $scope.topic.noStart ? 0 : -1;
	for (var i = 0; i < $scope.topics.length; i++) {
		var topic = $scope.topics[i];
		$scope.navItems.push({
			state: 'info',
			stateParams: { topic: topic.state },
			imageActive: topic.navImageActive,
			imageInactive: topic.navImageInactive
		});
	}
	$scope.paths = [];
	$scope.lengths = [];
	$scope.requestAnimationFrameID;
	$scope.currentFrame = 101;
	$scope.totalFrames = 100;
	$scope.animateSVG = function () {
		var progress = $scope.currentFrame / $scope.totalFrames;
		for (var i = 0; i < $scope.paths.length; i++) {
			$scope.paths[i].style.strokeDashoffset = Math.floor($scope.lengths[i] * (1 - progress));
		}
		$scope.currentFrame++;
		if (progress < 1) {
			$scope.requestAnimationFrameID = window.requestAnimationFrame($scope.animateSVG);
		}
	};
	$scope.initNewSlide = function () {
		var svg = document.getElementById('svgAnimation');
		while (svg.firstChild) {
			svg.removeChild(svg.firstChild);
		}
		var topic = $scope.topic.items[$scope.currentItem];
		if (topic && topic.svgAnimation) {
			if (topic.svgStatic) {
				for (var i = 0; i < topic.svgStatic.length; i++) {
					var element = topic.svgStatic[i];
					var object = document.createElementNS("http://www.w3.org/2000/svg", element.tag);
					for (var index in element) {
						if (element.hasOwnProperty(index) && index !== 'tag') {
							object.setAttribute(index, element[index]);
						}
					}
					svg.appendChild(object);
				}
			}
			for (var i = 0; i < topic.svgAnimation.length; i++) {
				var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
				path.style.fill = 'none';
				path.style.stroke = '#3D967D';
				path.style.strokeWidth = '3';
				path.style.strokeMiterlimit = '10';
				path.setAttribute('d', topic.svgAnimation[i]);
				var length = $scope.lengths[i] = path.getTotalLength();
				path.style.strokeDasharray = length + ' ' + length;
				path.style.strokeDashoffset = length;
				svg.appendChild(path);
				$scope.paths[i] = path;
			}
			if ($scope.currentFrame > $scope.totalFrames) {
				window.requestAnimationFrame($scope.animateSVG);
			}
			$scope.currentFrame = 0;
		}
	};
	$scope.initNewSlide();
	$scope.$on('$destrory', function () {
		window.cancelAnimationFrame($scope.requestAnimationFrameID);
	});
});
