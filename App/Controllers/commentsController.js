/**
 * Created by jceve on 11/17/2016.
 */

app.controller('postsController', function ($scope, $http,$routeParams) {

    $scope.comments = [];
    $scope.selectedComment = null;
    $scope.isLoading = true;
    var init = function () {
        var url = 'http://jsonplaceholder.typicode.com/comments';
        $http.get(url).then(function (response) {
            $scope.comments = response.data;
        }, $scope.error);


        if ($routeParams.id != null && $routeParams.id != undefined) {
            $http.get(url + "/" + $routeParams.id).then(function (response) {
                $scope.selectedComment = response.data;
                $scope.isLoading = false;
            }, $scope.error);

        }
    }

    init();

    $scope.error = function (data) {
        console.log(data);
    }
});