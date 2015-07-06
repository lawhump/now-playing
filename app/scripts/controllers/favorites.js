'use strict';

/**
 * @ngdoc function
 * @name wailtnewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wailtnewApp
 */
var BASE_URL = 'http://ws.audioscrobbler.com/2.0/?api_key=3d386c221b36c1442b384aa1d853bc8c&format=json';

angular.module('wailtnewApp')
  
    .controller('FavoritesCtrl', ['$scope', '$http', 
        function ($scope, $http) {

            $scope.categories = [
                {name:'Track', value:'tracks'},
                {name:'Album', value:'albums'},
                {name:'Artist', value:'artists'}
            ];
            $scope.category = $scope.categories[0];

            $scope.times = [
                {period:'Week', value:'7day'},
                {period:'3 Months', value:'3month'},
                {period:'6 Months', value:'6month'},
                {period:'Year', value:'12month'},
                {period:'Overall', value:'overall'}
            ];
            $scope.time = $scope.times[4];

            $scope.top = null;

            $http.get(BASE_URL+'&method=user.gettoptracks&user=guapo15&period='+$scope.time.period)
            .then(function(response) {
                console.log(response);
                $scope.top = response.data.toptracks.track;
            });
            
            $scope.update = function() {
                // var pl = document.querySelector('.preloader-faves');
                // angular.element(pl)[0].toggleClass('loaded hidden');
                // console.log(angular.element(pl));
                // console.log(angular.element(pl)[0]);
                var url = BASE_URL+'&method=user.gettop'+$scope.category.value+'&user=guapo15&period='+$scope.time.value;
                $http.get(url)
                .then(function(response) {
                    if (angular.equals($scope.category.value, "tracks"))
                        $scope.top = response.data.toptracks.track;
                    else if(angular.equals($scope.category.value, "albums"))
                        $scope.top = response.data.topalbums.album;
                    else
                        $scope.top = response.data.topartists.artist;
                });
                // console.log(angular.element(pl)[0]);
                // angular.element(pl)[0].toggleClass('loaded hidden');
            };
    }]);

