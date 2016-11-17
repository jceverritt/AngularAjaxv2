/**
 * Created by jceve on 11/17/2016.
 */

app.service('logService', function () {
    this.logMe = function (message) {
        console.log(message);
    }
});