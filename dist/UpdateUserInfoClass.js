"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CreateAccountClass_1 = require("./CreateAccountClass");
var UpdateUserInfo = /** @class */ (function (_super) {
    __extends(UpdateUserInfo, _super);
    function UpdateUserInfo(firstName, lastName, age, email) {
        var _this = _super.call(this) || this;
        _this.readInput = new CreateAccountClass_1.CreateAccount();
        // fs = require("fs");
        _this.format = "______";
        _this.formatLong = "____________________________________________________";
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.email = email;
        return _this;
    }
    UpdateUserInfo.prototype.updateUserInfo = function () {
        var _this = this;
        CreateAccountClass_1.rl.question("Welcome to Oluwafemi facebook app\n\n      Please enter your first name\n " + this.format, function (fName) {
            _this.firstName = fName;
            CreateAccountClass_1.rl.question("\n          Please enter your last name\n " + _this.format, function (lName) {
                _this.lastName = lName;
                CreateAccountClass_1.rl.question("\n              Please enter your age\n " + _this.format, function (age) {
                    _this.age = age;
                    CreateAccountClass_1.rl.question("\n                  Please enter your email address\n " + _this.format, function (email) {
                        _this.email = email;
                        console.log("\n                        " + _this.formatLong + "\n                        Account created successfully, Here are your details\n                        Full name: " + _this.firstName + " " + _this.lastName + "\n                        Age: " + _this.age + "\n                        Email address: " + _this.email + "\n                        " + _this.formatLong + "\n                        ");
                        console.log("\n                      \n                      You will need to update your profile");
                        _this.readInput.createAccount();
                        // })
                    });
                });
            });
        });
    };
    return UpdateUserInfo;
}(CreateAccountClass_1.CreateAccount));
exports["default"] = UpdateUserInfo;
