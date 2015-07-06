'use strict';

/**
 * @ngdoc function
 * @name wailtnewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wailtnewApp
 */

var BASE_URL = 'http://ws.audioscrobbler.com/2.0/?api_key=3d386c221b36c1442b384aa1d853bc8c&format=json&limit=1';

angular.module('wailtnewApp')
  
    .controller('MainCtrl', ['$scope', '$http', 
        function ($scope, $http) {
            
            $http.get(BASE_URL+'&method=user.getRecentTracks&user=guapo15')
            .then(function(response) {
                var mostRecentTrack = response.data.recenttracks.track[0];
                var imgObj = mostRecentTrack.image[3];
                var imgUrl = imgObj['#text'];
                
                $scope.MRTname = mostRecentTrack.name;
                $scope.MRTartist = mostRecentTrack.artist['#text'];
                $scope.url = imgUrl;

                console.log(response);

                $scope.currentlyListening = mostRecentTrack['@attr'].nowplaying;
                console.log($scope.currentlyListening);
            });
            
    }]);
