"use strict";
exports.__esModule = true;
var CreateAccount = /** @class */ (function () {
    function CreateAccount() {
        var _this = this;
        this.format = "______";
        this.formatLong = "________________________________";
        this.createAccount = function () {
            rl.question("Please enter your first name\n " + _this.format, function (fName) {
                _this.firstName = fName;
                rl.question("Please enter your last name\n " + _this.format, function (lName) {
                    _this.lastName = lName;
                    rl.question("Please enter your age\n " + _this.format, function (age) {
                        _this.age = age;
                        rl.question("Please enter your email address\n " + _this.format, function (email) {
                            _this.email = email;
                            console.log("Here are your details -> \n                        " + _this.formatLong + "\n                        Your full name: " + _this.firstName + " " + _this.lastName + "\n                        Your age: " + _this.age + "\n                        Your email: " + _this.email + "\n                        " + _this.formatLong + "\n                    ");
                            rl.close();
                        });
                    });
                });
            });
        };
    }
    return CreateAccount;
}());
