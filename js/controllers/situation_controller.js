angular.module('Hansaton')

.controller('SituationController', function($scope, $cordovaDevice, $routeParams, $http, SITUATIONS_DATA){

    $scope.initializeContent = function (index)
    {
        $scope.currentIndex = index
        $scope.currentSituation = SITUATIONS_DATA[$scope.currentIndex];
        $scope.showExtraInfo = false;

        // console.log($scope.currentSituation.features)

        // Get audio files.
        $scope.audio =[];
        var path = 'data/audio/' + $scope.currentSituation.name + '-';
        for (var i = 3 - 1; i >= 0; i--) {
            $scope.audio[i] = new Audio(path + i + '.mp3');
        };

        // Audio functions + Variables
        $scope.currentFilePlaying = 0;
        $scope.currentAudioTime = 0;
        $scope.isPlaying = false;
    }

    // First initialization when a route is being used.
    $scope.initializeContent($routeParams.situationId);

    $scope.swipeTo = function (index)
    {
        var value = $scope.currentIndex - index
        if(value >= 0 && value < SITUATIONS_DATA.length)
            $scope.switchPage(value);
    }

    $scope.switchPage = function (index)
    {
        $scope.stopPlaying();
        $scope.initializeContent(index);

    }

    // Play audio for specific situation.
    $scope.startPlaying = function ()
    {
        $scope.audio[$scope.currentFilePlaying].currentTime = $scope.currentAudioTime
        $scope.audio[$scope.currentFilePlaying].play();
        $scope.isPlaying = true;
    }

    $scope.switchQuality = function (fileNo)
    {
        $scope.currentAudioTime = $scope.audio[$scope.currentFilePlaying].currentTime;
        $scope.audio[$scope.currentFilePlaying].pause();
        $scope.currentFilePlaying = fileNo;
        if ($scope.isPlaying)
            $scope.startPlaying();
    }

    $scope.togglePlay = function ()
    {
        if ($scope.isPlaying)
            $scope.stopPlaying()
        else
            $scope.startPlaying()
    }


    $scope.stopPlaying = function ()
    {
        $scope.isPlaying = false
        for (var i = $scope.audio.length - 1; i >= 0; i--) {
            $scope.audio[i].pause();
            $scope.audio[i].currentTime = 0;
        };
    }



    // Helpers
    $scope.isNavItemActive = function(index) {
        if ($scope.currentIndex == index) {
            return 'active';
        };
    };

    $scope.isQualityActive = function(index) {
        if (index == $scope.currentFilePlaying) {
            return 'active';
        };
    };

    $scope.toggleExtraInfo = function ()
    {
        $scope.showExtraInfo = !$scope.showExtraInfo;
    }

})


    .controller('ReiseController', function($scope, $cordovaDevice, $routeParams, $http, REISE_DURCH_DAS_OHR){
        $scope.currentInfo = 0

        $scope.switchInfo = function (index)
        {
            console.log($scope.currentInfo)
            var value = $scope.currentInfo - index
            if(value >= 0 && value < REISE_DURCH_DAS_OHR.length)
                $scope.switchOnly(value)
        };

        $scope.switchOnly= function (index)
        {
            console.log(index)
            $scope.currentInfo = index;
        }

        $scope.isInfoActive = function(index) {
            if (index == $scope.currentInfo) {
                return 'active';
            }
        };

    });
