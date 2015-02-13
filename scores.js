var Scores = angular.module('Scores', []);

Scores.controller('ScoresController', ['$scope', function($scope){
  $scope.filter = 'votes';

  $scope.scores = [
    { name: 'Daniel', votes: 4 },
    { name: 'Alejandro', votes: 1 },
    { name: 'Gaytan', votes: 3 }
  ];

  $scope.add = function(newScore){
    $scope.scores.push(newScore);
    $scope.newScore = {};
  };

  $scope.upVote = function(score){
    if (score.votes === undefined) score.votes = 0;
    score.votes += 1;
  };

  $scope.downVote = function(score){
    score.votes <= 0 ? score.votes = 0 : score.votes -= 1;
  };
}]);
