angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['Lysa', 'Dave', 'Jared', 'Pat', 'Jake', 'Josh', 'Jason'];

  $scope.addFriend(f) {
    $scope.friends.push(f);
  }
});
