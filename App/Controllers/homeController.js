/**
 * Created by jceve on 11/17/2016.
 */

app.controller('homeController', function ($scope,productFactory) {
    $scope.Message = "hello..world";

    var init = function () {
        console.log(productFactory.testMethod());
    }

    init();
});