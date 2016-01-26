var app = angular.module('PlayerKillsApp', [])

app.factory('PlayerKillsFactory', [function () {
    return [
        {
            handle: "jk400",
            rank: 14932,
            clan: ["hpburner200", "sputnik", "sololobo21"]
     },
        {
            handle: "bob400",
            rank: 1543,
            clan: ["helloThere200", "theBaaayste", "sololobo21"]
     },
        {
            handle: "sololobo21",
            rank: 1330,
            clan: ["hpburner200", "jk400", "sololobo21", "SomeGuy37"]
     },
        {
            handle: "HelloItsMe",
            rank: 23403,
            clan: ["sputnik", "sololobo21"]
     }
 ];
}])


app.controller('MainController', ['$scope', 'PlayerKillsFactory', function ($scope, PlayerKillsFactory) {
    $scope.playerKills = PlayerKillsFactory;
    $scope.newPlayer = {
        handle: undefined,
        rank: undefined
    };

    $scope.addPlayer = function () {
        $scope.playerKills.push($scope.newPlayer);
    }

}])